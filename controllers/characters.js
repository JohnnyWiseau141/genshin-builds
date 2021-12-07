import axios from 'axios'
import { Character } from '../models/character.js'
import { Profile } from '../models/profile.js'
const BASE_URL = 'https://api.genshin.dev'

function index(req, res) {
   axios.get(`${BASE_URL}/characters`)
      .then(characters => {
         res.json(characters.data)
      })
      .catch(function (error) {
         console.log(error);
      })
}

function show(req, res) {
   axios.get(`${BASE_URL}/characters/${req.params.character}`)
      .then(characterInfo => {
         res.json(characterInfo.data)
      })
      .catch(function (error) {
         console.log(error);
      })
}

function create(req, res) {
   Character.findOne({ characterName: req.body.characterName })
      .then(character => {
         //If character exists
         if (character) {
            character.collectedBy.push(req.user)
            character.save()
            Profile.findById(req.user.profile)
               .then(profile => {
                  profile.characters.push(character._id)
                  profile.save()
                  //end here and respond
                  res.json(character)
               })
         } else {
            Character.create(req.body)
               .then(character => {
                  character.collectedBy = req.user.profile
                  character.save()
                  Profile.findById(req.user.profile)
                     .then(profile => {
                        profile.characters.push(character._id)
                        profile.save()
                        res.json(character)
                     })
               }
               ).catch(err => {
                  console.log(err)
               })
         }
      })
}

function removeFromCollection(req, res) {
   Character.findOne({ characterName: req.params.character })
      .then(character => {
         Profile.findById(req.user.profile)
         .then(profile => {
            let index1 = character.collectedBy.findIndex(function (element) {
               return element.toString() === req.user.profile;
            })
            character.collectedBy.splice(index1, 1)
            character.save()
            let index2 = profile.characters.findIndex(function (element){
               return element.toString() === req.user.profile;
            })
            profile.characters.splice(index2,1)
            profile.save()
         })
      })
}

export {
   index,
   show,
   create,
   removeFromCollection
}
import axios from 'axios'
import { Character } from '../models/character.js'
const BASE_URL = 'https://api.genshin.dev'

function index(req, res){
   axios.get(`${BASE_URL}/characters`)
   .then(characters => {
      res.json(characters.data)
   })
   .catch(function (error) {
      console.log(error);
   })
}

function show(req, res){
   axios.get(`${BASE_URL}/characters/${req.params.character}`)
   .then (characterInfo =>{
      res.json(characterInfo.data)
   })
   .catch(function (error) {
      console.log(error);
   })
}

function create(req,res){
   Character.findOne({characterName: req.body.characterName})
   .then (character => {
      if (character) { 
         character.collectedBy.push(req.user.profile)
         character.save()
      } else { 
         Character.create(req.body)
         .then(character => {
            character.collectedBy = req.user.profile
            character.save()
            res.json(character)
         })
         .catch(function (error) {
            console.log(error);
         })
      }
   })
}

function removeFromCollection(req,res) {
   Character.findOne({characterName: req.params.character})
   .then (character => {
      let index = character.collectedBy.findIndex(function(element){
         return element.toString() === req.user.profile;
      })
      character.collectedBy.splice(index,1)
      character.save()
   })
}

export {
   index,
   show,
   create,
   removeFromCollection
}
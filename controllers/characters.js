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
   //Check to see if character is already in database
   Character.findOne({characterName: req.body.characterName})
   .then (character => {
      if (character){ //if character exists in the database, do the following
         character.collectedBy.push(req.user.profile)
         character.save()
      } else { //if character does not exist in the database, create the character
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

export {
   index,
   show,
   create
}
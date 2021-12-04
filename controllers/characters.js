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
   Character.create(req.body)
   .then(character => {
      res.json(character)
   })
   .catch(function (error) {
      console.log(error);
   })
}

export {
   index,
   show,
   create
}
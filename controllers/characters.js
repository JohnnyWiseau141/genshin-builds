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

export {
   index
}
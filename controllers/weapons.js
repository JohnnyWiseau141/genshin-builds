import axios from 'axios'
import { Weapon } from '../models/weapon.js'
const BASE_URL = 'https://api.genshin.dev'

function index(req, res){
   axios.get(`${BASE_URL}/weapons`)
   .then(weapons => {
      res.json(weapons.data)
   })
   .catch(function (error) {
      console.log(error);
   })
}

export {
   index
}
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

function show(req, res){
  axios.get(`${BASE_URL}/weapons/${req.params.weapon}`)
  .then (weaponInfo =>{
     res.json(weaponInfo.data)
  })
  .catch(function (error) {
     console.log(error);
  })
}

function create(req, res){
   //Check to see if character is already in database
   Weapon.findOne({weaponName: req.body.weaponName})
      .then (weapon => {
         if (weapon){ //if weapon exists in the database, do the following
            weapon.heldBy.push(req.user.profile)
            weapon.save()
         } else { //if weapon does not exist in the database, create the weapon
            Weapon.create(req.body)
            .then(weapon => {
               weapon.heldBy = req.user.profile
               weapon.save()
               res.json(weapon)
            })
            .catch(function (error) {
               console.log(error);
            })
         }
   })
}

function removeWeapon(req, res) {
   Weapon.findOne({weaponName: req.params.weapon})
      .then (weapon => {
         let index = weapon.heldBy.findIndex(function(element){
            return element.toString() === req.user.profile;
         })
         weapon.heldBy.splice(index,1)
         weapon.save()
         })
         .catch(function (error) {
            console.log(error);
   })
}

export {
   index,
   show,
   create,
   removeWeapon
}
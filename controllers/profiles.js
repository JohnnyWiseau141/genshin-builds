import { Profile } from '../models/profile.js'
import { Character } from '../models/character.js'
import { Build } from '../models/build.js'

function getProfile(req, res) {
   Profile.findById(req.params.id)
      .then(profile => {
         res.json(profile)
      })
}

function getMyCharacters(req, res) {
   Character.find({ collectedBy: req.params.id})
   .then(characters => {
      res.json(characters)
   })
}

function create(req, res){
   Build.create(req.body)
   .then(build => {
      res.json(build)
   })
}

export {
   getProfile,
   getMyCharacters,
   create
}
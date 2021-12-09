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
      Profile.findById(req.user.profile)
      .then(profile => {
         profile.teamBuilds.push(build._id)
         profile.save()
      })
      res.json(build)
   })
}

function addCharacter(req,res){
   // Build.findByIdAndUpdate(req.params.id)
   // .then(updatedBuild => {
   //    updatedBuild.populate('character1')
   //    updatedBuild.character1.push(req.body)
   //    .then(build => {
   //       res.json(build)
   //    })
   // })
   console.log(req.params.id)
}

export {
   getProfile,
   getMyCharacters,
   create,
   addCharacter
}
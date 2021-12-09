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
   Build.findByIdAndUpdate(req.params.buildId)
   .then(build =>{
      Character.findOne({ characterName: req.body.name })
      .then(character => {
         if (parseInt(req.params.selectedIdx) === 0){
            build.character1.push(character._id)
            build.save()
         } else if (parseInt(req.params.selectedIdx) === 1) {
            build.character2.push(character._id)
            build.save()
         } else if (parseInt(req.params.selectedIdx) === 2){
            build.character3.push(character._id)
            build.save()
         } else if (parseInt(req.params.selectedIdx) ===3){
            build.character4.push(character._id)
            build.save()
         }
      })
      res.json(build)
   })
}


export {
   getProfile,
   getMyCharacters,
   create,
   addCharacter
}
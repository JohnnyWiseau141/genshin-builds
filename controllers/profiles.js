import { Profile } from '../models/profile.js'
import { Character } from '../models/character.js'
import { Build } from '../models/build.js'
import { Weapon } from '../models/weapon.js'

function getProfile(req, res) {
   Profile.findById(req.params.id)
      .then(profile => {
         res.json(profile)
      })
}

function getMyCharacters(req, res) {
   Character.find({ collectedBy: req.params.id })
      .then(characters => {
         res.json(characters)
      })
}

function getMyWeapons(req, res) {
   Weapon.find({ heldBy: req.params.id })
      .then(weapons => {
         res.json(weapons)
      })
}

function create(req, res) {
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

function addCharacter(req, res) {
   Build.findByIdAndUpdate(req.params.buildId)
      .then(build => {
         Character.findOne({ characterName: req.body.name })
            .then(character => {
               if (parseInt(req.params.selectedIdx) === 0) {
                  build.character1.push(character.characterName)
                  build.save()
               } else if (parseInt(req.params.selectedIdx) === 1) {
                  build.character2.push(character.characterName)
                  build.save()
               } else if (parseInt(req.params.selectedIdx) === 2) {
                  build.character3.push(character.characterName)
                  build.save()
               } else if (parseInt(req.params.selectedIdx) === 3) {
                  build.character4.push(character.characterName)
                  build.save()
               }
            })
         res.json(build)
      })
}

function getMyBuilds(req, res) {
   Build.find({ createdBy: req.params.id })
      .then(builds => {
         res.json(builds)
      })
}

function deleteMyBuild(req, res) {
   Build.findByIdAndDelete(req.params.id)
   .then(build => {
      res.json(build)
   })
}

export {
   getProfile,
   getMyCharacters,
   create,
   addCharacter,
   getMyBuilds,
   deleteMyBuild as delete,
   getMyWeapons
}
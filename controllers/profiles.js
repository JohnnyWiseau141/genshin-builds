import { Profile } from '../models/profile.js'
import { Character } from '../models/character.js'

function show(req, res) {
   Profile.findById(req.params.id)
      .populate('characters')
      .then(profile => {
         Character.find({ collectedBy: req.params.id })
            .then(characters => {
               res.json(characters)
            })
      })
}

export {
   show
}
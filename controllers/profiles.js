import { Profile } from '../models/profile.js'
import { Character } from '../models/character.js'

function getMyCharacters(req, res) {
   Profile.findById(req.params.id)
      .populate('characters')
      .then(profile => {
         Character.find({ collectedBy: req.params.id })
            .then(allCharacters => {
               profile.characters.push(allCharacters)
               profile.save()
                  .then(all => {
                     res.json(allCharacters)
                  })
            })
      })
}

//Characters owned by users will ONLY be pushed when accessing this profile page!!!!!!!!

export {
   getMyCharacters
}
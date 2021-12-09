import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/:id', checkAuth, profilesCtrl.getProfile)
router.get('/:id/characters', checkAuth, profilesCtrl.getMyCharacters)
router.post('/',profilesCtrl.create)
router.patch('/:id',checkAuth, profilesCtrl.addCharacter)

export { router }
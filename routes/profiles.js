import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/:id', checkAuth, profilesCtrl.getProfile)
router.get('/:id/builds', checkAuth, profilesCtrl.getMyBuilds)
router.get('/:id/characters', checkAuth, profilesCtrl.getMyCharacters)
router.post('/:id/builds', profilesCtrl.create)
router.patch('/:id/builds/:buildId/:selectedIdx', checkAuth, profilesCtrl.addCharacter)
router.delete('/:id/builds', checkAuth, profilesCtrl.delete)

export { router }
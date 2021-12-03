import { Router } from 'express'
import * as weaponsCtrl from '../controllers/weapons.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', weaponsCtrl.index)
router.get('/:weapon', weaponsCtrl.show)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

export { router }
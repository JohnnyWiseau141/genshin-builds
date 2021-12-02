import { Router } from 'express'
import * as charactersCtrl from '../controllers/characters.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', charactersCtrl.index)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

export { router }
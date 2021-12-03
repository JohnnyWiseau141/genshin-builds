import 'dotenv/config.js'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import logger from 'morgan'
import cors from 'cors'
import { router as usersRouter } from './routes/users.js'
import { router as authRouter } from './routes/auth.js'
import { router as charactersRouter } from './routes/characters.js'
import { router as profilesRouter } from './routes/profiles.js'
import { router as weaponsRouter } from './routes/weapons.js'
import { router as buildsRouter } from './routes/builds.js'

import('./config/database.js')

const app = express()


app.use(cors())
app.use(logger('dev'))
app.use(express.json())

app.use('/api/users', usersRouter)
app.use('/api/auth', authRouter)
app.use('/api/characters', charactersRouter)
app.use('/api/profile', profilesRouter)
app.use('/api/weapons', weaponsRouter)
app.use('/api/builds', buildsRouter)

app.get('/*', function (req, res) {
  res.sendFile(
    path.dirname(fileURLToPath(import.meta.url), 'build', 'index.html')
  )
})

const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`Express is listening on port ${port}.`)
})

import mongoose from 'mongoose'

const Schema = mongoose.Schema

const weaponSchema = new Schema ({
  weaponName: String,
  weaponType: String,
  baseAttack: Number,
})

const Weapon = mongoose.model('Weapon', weaponSchema)

export {
  Weapon
}
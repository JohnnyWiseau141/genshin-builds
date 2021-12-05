import mongoose from 'mongoose'

const Schema = mongoose.Schema

const weaponSchema = new Schema ({
  weaponName: String,
  weaponType: String,
  baseAttack: Number,
  heldBy: [{type: Schema.Types.ObjectId, ref: 'Profile'}]
})

const Weapon = mongoose.model('Weapon', weaponSchema)

export {
  Weapon
}
import mongoose from 'mongoose'

const Schema = mongoose.Schema

const characterSchema = new Schema ({
  characterName: String,
  characterWeaponType: String,
  characterWeapon: [{type: Schema.Types.ObjectId, ref: 'Weapon'}],
  rarity: Number
})

const Character = mongoose.model('Character', characterSchema)

export {
  Character
}
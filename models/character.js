import mongoose from 'mongoose'

const Schema = mongoose.Schema

const characterSchema = new Schema ({
  characterName: String,
  characterWeaponType: String,
  characterWeapons: {type: Schema.Types.ObjectId, ref: 'Weapon'},
  collectedBy: [{type: Schema.Types.ObjectId, ref: 'Profile'}],
  rarity: Number
})

const Character = mongoose.model('Character', characterSchema)

export {
  Character
}
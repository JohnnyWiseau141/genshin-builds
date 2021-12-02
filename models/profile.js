import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new mongoose.Schema(
  {
    email: String,
    name: String,
    avatar: String,
    characters: [{type: Schema.Types.ObjectId, ref: 'Character'}],
    teamBuilds: [{type: Schema.Types.ObjectId, ref: 'Build'}]
  },
  {
    timestamps: true,
  }
  )

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
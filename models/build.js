import mongoose from 'mongoose'

const Schema = mongoose.Schema

const buildSchema = new Schema ({
  createdBy: {type: Schema.Types.ObjectId, ref: 'Profile'},
  character1: [{type: Schema.Types.String, ref: 'Character'}],
  character2: [{type: Schema.Types.String, ref: 'Character'}],
  character3: [{type: Schema.Types.String, ref: 'Character'}],
  character4: [{type: Schema.Types.String, ref: 'Character'}]
})

const Build = mongoose.model('Build', buildSchema)

export {
  Build
}
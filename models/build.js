import mongoose from 'mongoose'

const Schema = mongoose.Schema

const buildSchema = new Schema ({
  character1: [{type: Schema.Types.ObjectId, ref: 'Character'}],
  character2: [{type: Schema.Types.ObjectId, ref: 'Character'}],
  character3: [{type: Schema.Types.ObjectId, ref: 'Character'}],
  character4: [{type: Schema.Types.ObjectId, ref: 'Character'}]
})

const Build = mongoose.model('Build', buildSchema)

export {
  Build
}
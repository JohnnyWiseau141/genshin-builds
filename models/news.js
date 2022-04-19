import mongoose from 'mongoose' 

const Schema = mongoose.Schema

const newsSchema = new Schema({
   version: String,
   shortDescription: {type: String, required: true},
   fullDescription: {type: String, required: true},
   dateOfUpdate: String,
}, {
   timestamps: true,
})

const News = mongoose.model('News', newsSchema)

export {
   News
}
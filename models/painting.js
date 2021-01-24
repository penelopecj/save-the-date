import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true, maxlength: 300 },
  rating: { type: Number, required: true, min: 1, max: 5 },
  // This will shape the user data as the user schema
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
}, {
  // This will add the correct time added
  timestamps: true,
})

const paintingSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  artist: { type: String, required: true },
  year: { type: Number, required: true },
  artistCountry: { type: String, required: true },
  image: { type: String },
  // Adds relationships between the paitings and the users
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true  },
  comments: [commentSchema],
})

// A dependency for checking and erroring the uniqueness of the data inputs
paintingSchema.plugin(uniqueValidator)

export default mongoose.model('Painting', paintingSchema)
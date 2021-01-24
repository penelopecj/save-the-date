import mongoose from 'mongoose'
import { dbURI } from '../config/environment.js'

export default function connectToDatabase() {
  const mongooseConnectionSettings = { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true, 
  }

  return mongoose.connect(dbURI, mongooseConnectionSettings)
}
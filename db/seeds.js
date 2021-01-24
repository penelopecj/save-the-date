import mongoose from 'mongoose'
import connectToDatabase from '../lib/connectToDb.js'
import User from '../models/user.js'
import userData from './data/users.js'

async function seedDatabase() {
  try {
    await connectToDatabase()
    console.log('📥 Wedding database has connected')
    
    // Empty database
    await mongoose.connection.db.dropDatabase()
    console.log('📤 Database dropped')
  
    // Create users from seed users data
    const users = await User.create(userData)
    console.log(`🧐 ${users.length} users created`)
  
    // Database re-seeded, our work here is done
    await mongoose.connection.close()
    console.log('👋 Connection closed, goodbye')

    // Will error any time if something fails
  } catch (err) {
    console.log('❌ Something went wrong')
    console.log(err)
    
    await mongoose.connection.close()
    console.log('👋 Connection closed, goodbye')
  }
}

seedDatabase()
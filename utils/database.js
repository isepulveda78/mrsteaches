import mongoose from 'mongoose'

let connected = false

const db = async () => {
  mongoose.set('strictQuery', true)

  // If the database is already connected, don't connect again
  if (connected) {
    console.log('MongoDB is already connected...')
    return
  }

  // Connect to MongoDB
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    connected = true
    console.log('MongoDB connected...')
  } catch (error) {
    console.log(error)
  }

const disconnectDB = async () => {
  if(!connected){
    await mongoose.disconnect()
    connected = false
    console.log('MongoDB is disconnected')
  }
}
}

export default db
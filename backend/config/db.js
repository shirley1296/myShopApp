import mongoose from 'mongoose'

const connectDB = async () => {
// //Promise statement
// const conn = await mongoose.connect(process.env.MONGO_URI, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true
//    }).then({
//     console.log(`MongoDb connected: ${conn.connection.host}`)   
//    }).catch(error)({
//     console.log('failure')   
//    })

    try{
 const conn = await mongoose.connect(process.env.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
 }) 
console.log(`MongoDb connected: ${conn.connection.host}` )
 } catch(error){
     console.error(`Error: ${error.messsage}`)
     process.exit(1)
 }
}

export default connectDB
import mongoose from 'mongoose';
import { DB_NAME} from '../constant.js'

// (async ()=>{
//     try{
//        await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     } catch(error){
//         console.error("Error",error)
//         throw err
//     }
// })()

const connectDB = async()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`)
    } catch(error){
        console.log("MONGODB CONNECTION ERROR",error)
        process.exit(1)
    }
}

export default connectDB
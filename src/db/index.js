import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";



const connectDB=async()=>{
     try {
       const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)//momgodb returns an object so that is stored in connectionInstance 
       console.log(`\n Mongodb connect !!!! :${connectionInstance.connection.host}`)
     } catch (error) {
        console.log("MONGODB connection error",error);
        process.exit(1)//process is provided by nodejs ..our application is running on a proecss.so it,s that process reference. we can use throw also to exit

     }
}
export default connectDB
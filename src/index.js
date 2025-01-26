//require('dotenv').config()== we r using require and import in this so we have to maintain consistancey..so we r using import only .
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})


//when asyncronous method is completed then it returns a promise.

connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`server is running at  port : ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("mongodb collection failed",err)
})


























// import express from "express";
//import mongoose, { mongo } from "mongoose";
//import {DB_NAME} from "./constants";
// const app=express()
//
// index file is polutetd much so we can write same code in db folder and import the function in index file ..this code also works.
// (async()=>{
//    try {

//       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//       app.on("error",(error)=>{
//         console.log("ERROR:",error);
//         throw error
//       })
//       app.listen(process.env.PORT,()=>{
//         console.log(`APP IS Listening on port : ${process.env.PORT}`);
//       })
//    } catch (error) {
//        console.error("ERROR",error)//console.log can also be used
//        throw error

//    }

// })()

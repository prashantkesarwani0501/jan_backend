import express from "express";
import cors from "cros"
import cookieParser from "cookie-parser";

const app= express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credential:true

}))

//when response is coming from frontend they me coming in various formt like jason body url ..etc .every type has a limit  like in below case json has 16kb limit.
// data coiming from form
app.use(express.json({limit:"16kb"}))
//data coming from url
app.use(express.urlencoded({extended:true,limit:"16kb"}))
//to store pdf files,img ,, etc in oyr own servers.
app.use(express.static("public"))
export {app}
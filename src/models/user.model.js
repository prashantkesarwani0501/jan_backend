import mongoose ,{Schema} from "mongoose";
import jwt  from "jsonwebtoken";// to encrypt web token s
import bcrypt from "bcrypt";//to encrypt password

const userSchema= new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true // for searching 
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        //index:true
    },
    fullname:{
        type:String,
        required:true,
       // unique:true,
       // lowercase:true,
        trim:true,
        index:true
    },
    avatar:{
        type:String,//url of cloudinary
        required:true,
        // unique:true,
        // lowercase:true,
        // trim:true,
        //index:true
    },
    coverImage:{
        type:String,//from cloudinary url
        // required:true,
        // unique:true,
        // lowercase:true,
        // trim:true,
        //index:true
    },
    //watch history is an array as multiple value is to be added in it.
    watchHistory:[
          {
            type:Schema.Types.ObjectId,
            ref:"video"
          }
    ],
    password:{
        type:String,
        required:[true,'Password is required']
    },
    refreshToken:{
        type:String
    }
},{timestamps:true})

userSchema.pre("save", async function (next) {
    if(this.isModified("passowrd")) return next();  
    this.password=bcrypt.hash(this.password,10)
    next()
})

userSchema.methods.isPasswordCorrect = async function (password){
   return await bcrypt.compare(password,this.password);
}

userSchema.methods.generateAccesstoken =function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username : this.username,
            fullname:this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken=function (){
    return jwt.sign(
        {
            _id: this._id
            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User= mongoose.model("User,userSchema")
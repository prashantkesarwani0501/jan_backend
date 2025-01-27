import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";//file system for read write remove ..etc.

// Configuration
cloudinary.config({ 
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME , 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary = async (localFilePath) =>{
    try {
       if(!localFilePath)return null;
       //upload file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        //file is been uploaded successfully.
        console.log("file is uploaded successfully",response.url)
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath)// remove the local save file as the upload is been failed

    }
}

export {uploadOnCloudinary}
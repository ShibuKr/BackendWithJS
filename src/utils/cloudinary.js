import {v2 as cloudinary} from "cloudinary"
import { response } from "express";
import fs from "fs"

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY , 
    api_secret:  process.env.CLOUDINARY_API_SECRET 
  });

export const uploadOnCloudinary = async(localfilepath)=>{
try{
 if(!localfilepath) return null
//  upload the file on clouinary
 const response = await cloudinary.uploader.upload(localfilepath,{
    resource_type:"auto"
 })
 //file has been uploaded succesfully
 console.log("file has been uploaded succesfully",response.url)

return response
}catch(error){
fs.unlinkSync(localfilepath) //remove the locally saved temp file as the upload operation failed
return null;
}
}
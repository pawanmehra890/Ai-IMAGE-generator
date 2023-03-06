const express=require('express')
const dotenv=require('dotenv')
const cloudinary = require('cloudinary').v2;
const router=express.Router()


dotenv.config()

cloudinary.config({
    cloud_name :'dvbqbaimx',
    api_key : '323237579858439',
    api_secret :'wdGjYXv_5WSCRNosGSKho9ywNWY',
    secure : true

})





module.exports=router
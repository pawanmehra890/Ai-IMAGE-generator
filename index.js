const express=require('express')
const dotenv=require('dotenv')
const cors=require('cors')
const cloudinary = require('cloudinary').v2;
const PostSchema=require('./postSchema')

const postRoutes =require('./postroute')
const Delote=require('./dalleroutes')


const {Configuration,OpenAIApi}=require('openai');
const { post } = require('./postroute');


dotenv.config()


const router=express.Router()

let Api='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'

const configuration=new Configuration({
    apiKey:Api
})


const openAi=new OpenAIApi(configuration)






require('./con')
dotenv.config()
const app=express()

app.use(cors())
app.use('/get',postRoutes)

app.use(express.json({limit:'50mb'}))


app.post('/gettt',async(req,res)=>{
    try{
                const {prompt}=req.body
                const aiResponse=await openAi.createImage({
             prompt,
             n:1,
             size:'1024x1024',
            response_format:'b64_json'
            })
        const image=aiResponse.data.data[0].b64_json
        res.status(200).json({photo:image})
        
            }catch(error){
         console.log(error)
            }
})



  app.get('/getImage',async(req,res)=>{
    try{
        const posts=await PostSchema.find({})
        res.status(201).json({ success:true,data:posts})
    }catch(error){
        res.status(201).json(error)
    }
  })

app.post('/cloudpost',async(req,res)=>{
   try{
   const {name,prompt,photo}=req.body
   const photoUrl=await cloudinary.uploader.upload(photo)


   const newpost=await PostSchema.create({
    name,prompt,photo:photoUrl.url
   })
    res.status(201).json({success:true,data:newpost})

   }catch(error){
    res.status(201).json(error)
   }

})

const startServer=async()=>{
    app.listen(5000,()=>console.log('server started'))
}


startServer()
const express=require('express')
const dotenv=require('dotenv')

const app=express()
const {Configuration,OpenAIApi}=require('openai')


dotenv.config()


const router=express.Router()

let Api='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'

const configuration=new Configuration({
    apiKey:Api
})


const openAi=new OpenAIApi(configuration)


// router.route('/').post(async(req,res)=>{
// 
// })

module.exports=router

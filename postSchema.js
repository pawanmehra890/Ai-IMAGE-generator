   const mongoose=require('mongoose')



    const Post=mongoose.Schema({

    name:{type:String},


    prompt:{type:String},


    photo:{type:String}

    })

    const PostSchema=mongoose.model('post',Post)
    
    module.exports=PostSchema











import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
// import {Preview} from '../assets'
import {getRandpromt} from '../utils'
import axios from 'axios'
import  {Loader,Card,Formfiled} from '../component'
const Createpost=()=>{
    const navigate=useNavigate()

  const [form,setForm]=useState({
    name:'',
    prompt:'',
    photo:''
  })


const handlesubmits=async(e)=>{
e.preventDefault()

if(form.prompt && form.photo){
  try{
    const response=await fetch('http://localhost:5000/cloudpost',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(form)

    })
    await response.json()
    navigate('/')
  }
  catch(error){
console.log(error)
  }
}
 
}

const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value })
}

const handleSurpriceme=()=>{
const randomPrompt=getRandpromt(form.prompt)
setForm({...form,prompt:randomPrompt})
}
// const generateimage=()=>{
//   const randomPrompt=getRandpromt(form.prompt)
//   setForm({...form,prompt:randomPrompt})

// }
  const [generateImg,setGenerateIMG]=useState(false)
   const [loading,setloading]=useState(false)
 
   



   const generateimage = async () => {
    if (form.prompt) {
      try {
        setGenerateIMG(true);
        const response = await axios.post('http://localhost:5000/gettt', {
          prompt: form.prompt
        });
        const data = response.data;
        setForm({
          ...form,
          photo: `data:image/jpeg;base64,${data.photo}`
        });
      } catch (error) {
        console.log(error);
      } 
      finally {
        setGenerateIMG(false);

      }
    }
  }
  
  
  
  
  

console.log(form.photo)

    return(
        <>
        
         <section className="max-w-7xl mx-auto">

<div>
    <h1 className="font-extrabold text-[#222328] text-[32px]"> create</h1>
    <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">Create Imaginative and visually stunning images through DALL-E Ai and share them with the community</p>
</div>

<form className="mt-16 max-w-3xl  " >
     <div className="flex flex-col gap-5">
      <Formfiled
       LabelName="Your name"
       type="text"
       placeholder="Your nam"
       name="name"
       value={form.name}
       handleChange={handleChange}

      />
      
       <Formfiled
       LabelName="Prompt"
       type="text"
       placeholder="A plush toy robot agaist a yellow wall"
       name="prompt"
       value={form.prompt}
       nmae="prompt"
       handleChange={handleChange}
       isSurpriseme
       handleSurpriceme={handleSurpriceme}

      />

      <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
{
  form.photo?(
    <img src={form.photo}
    className="w-full h-full object-contain"/>
  ):"nothing"
}
{
  generateImg &&(
    <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)]">

      <Loader/>
    </div>
  )
}

      </div>
      <div className="mt-5 flex gap-5">
<button type="button" className="text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center" onClick={generateimage}>

{generateImg?'Generating....':"Generate"}

</button>
</div>
<p className="mt-2 text-[#666e75] text-[14px]">One you Created the image you can share with your friends</p>
<button type="button" className="mt-2 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center" onClick={handlesubmits}>

{
  loading?"gerarinnnnn":'Share With Friends'
}

</button>
     </div>
     </form>
         </section>
        </>
    )
}

export default Createpost
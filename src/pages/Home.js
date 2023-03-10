import axios from "axios";
import React, { useEffect, useState } from "react";
import  {Loader,Card,Formfiled} from '../component'




const RenderCards=({data,title})=>{
  console.log(data)
  if(data?.length>0)
  
  return data.map((post)=>{
    <Card key={post._id} {...post}></Card>
  })
  return(
    <h2 className="mt-5 font-bold text-[#6449ff] text-xl uppercase">{title}</h2>
  )
}

const Home=()=>{
    const [loading,setLoading]=useState(false)
    const [allpost,setAllpost]=useState([])
    const [textSearch,SetTEXTsearch]=useState()
useEffect(()=>{
   
  const fetchproducts=async()=>{
     setLoading(true)
     try{
      const response=await fetch('http://localhost:5000/getImage',{
        method:"GET",
        headers:{
          'Contetnt-Type':"application/json"
        }
      })
      if(response.ok){
        const result=await response.json()
        setAllpost(result.data.reverse())
      }

     }
     catch(error){
      console.log(error)
     }finally{
      setLoading(false)

     }

  }

fetchproducts()

},[])


    return(
        <>
        
          <section className="max-w-7xl mx-auto">
            <div>
                 <h1 className="font-extrabold text-[#222328] text-[32px]">The Community Showcase</h1>
 <p className="mt-2 text-[#666e75] text-[18px] max-w-[500px]">Browse through a collection of visually stunning images generated by DALL-E AI</p>

            </div>
   
   <div className="mt-10">
    {loading?(<div className="flex justify-center align-center">
        <Loader/>
    </div>):(
        <>
        {textSearch && (
            <h2 className="font-medium text-[#666e75] text-xl mb-3">
         
          Showing result for <span className="text-[#222328]">{textSearch}</span>
              {/* {allpost?.map((post)=>{

              })} */}
            </h2>

        )}
            <div className="grid lg:grid-cols-4 sm:grid-cols-3-xs:grid-cols-2 grid-cols-1 gap-3">


   {
    textSearch?(<RenderCards data={[]} title="no search found" />):(<RenderCards data={[allpost]} title="no post found"></RenderCards>)
   }

            </div>

        </>
    )}
   </div>
            

          </section>




   <Card data={allpost}/>

        </>
    )
}

export default Home
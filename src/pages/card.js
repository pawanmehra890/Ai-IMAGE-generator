import React from "react";
import { downloadImage } from "../utils";
 
const Card=({data})=>{
    console.log(data)
    return(
        <>



{
    data.map((photo)=>{
return(
    <>
<div className="rounded-xl group  h-15 relative m-4 shadow-card hover:shadow-cardhover card">

<img src={photo.photo} className="w-75 h-auto object-cover rounded-xl"></img>

<div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left right-0 bg-[#10131f] m-2 p-4 rounded-md">

    <p className="text-white text-sm overflow-y-auton prompt">
        {photo.prompt}
    </p>
    <div className="mt-5 flex justify-between items-center gap-2">

     <div className="flex items-center text-[white]]] gap-2 ">
<div className="w-7 h-7 rounded-full object-cover bg-green-700 flex jutify-center items-center text-white text -xs bold">{photo.name}</div>

     </div>
<button type="button" className="outline-none text-[white] bg-transparent border-none" onClick={()=>downloadImage(photo._id,photo.photo)}  >Download</button>

    </div>
</div>

</div>

    </>
)
    })
}

     
 

        </>
    )
}

export default Card
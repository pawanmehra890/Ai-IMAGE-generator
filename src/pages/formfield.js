import React from "react";



const Formfiled=({LabelName,type,name,placeholder,value,handleChange,isSurpriseme,handleSurpriceme})=>{

    return(
        <>
        <div className="">
            <div className="flex items-center gap-2 mb-2">
                <label htmlFor={name} className="block text-sm font-medium text-grey-900">{LabelName}</label>

                {
            isSurpriseme && (
                <button type="button" onClick={handleSurpriceme} className="font-smibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black" >Surprise Me</button>
            )
        }
            </div>

        </div>

        <input type={type} id={name} name={name} placeholder={placeholder} value={value} onChange={handleChange} required className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3" ></input>

        </>
    )
}

export default Formfiled
import { surpriseMePrompts } from "../constant";
import FileSaver from "file-saver";
export function  getRandpromt(prompt){
    const randomIndexx=Math.floor(Math.random()* surpriseMePrompts.length)
    const randomPrompt=surpriseMePrompts[randomIndexx]

    if(randomPrompt===prompt) return getRandpromt(prompt)
    
     return randomPrompt
}



export async function downloadImage(_id,photo){
    FileSaver.saveAs(photo,`download-${_id}.jpg`)
}
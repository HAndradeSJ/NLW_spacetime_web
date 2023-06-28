'use client'

import { ChangeEvent, useState } from "react"


export function Mediapicker (){
    const [preview,setPreview] = useState<string| null>(null)

    function TakeFile(event:ChangeEvent<HTMLInputElement>){
        const { files }=  event.target   

        if(!files){
            return
        }     
        const previewUrl = URL.createObjectURL(files[0])

        setPreview(previewUrl)
    }
    return (
        <>
            <input onChange={TakeFile}  type="file" id="midia" name='imageUrl'accept="image/*" className="invisible h-0 w-0"/>
            {preview && <img src={preview} alt=""  className=" w-full rounded-lg object-cover aspect-video"/>}
        </>
    )
}
'use client' 

import { Camera } from "lucide-react";
import { Mediapicker } from "./Mediapicker";
import { FormEvent } from "react";

  export function FormNewmemory(){
        function createMemory(event:FormEvent){
            event.preventDefault()
            
        }
    return (
        <form onSubmit={createMemory()} className="flex flex-1 flex-col gap-2">
        <div className="flex items-center gap-4">
            <label htmlFor="midia" className=" flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100">
                <Camera className="w-4 h-4"/>
                Anexar mídia
            </label>
           <Mediapicker/>
            <label htmlFor="isPublic" className="flex items-center  gap-1.5 text-gray-200 hover:text-gray-100">
                <input type="checkbox" name="isPuclic" id="isPublic" value='true' className="h-4 w-4 rouded border-gray-400 bg-gray-700 text-purple-500"/>
                Tornar memórias Pública  
            </label>

        </div>
      <textarea name="content" spellCheck={false} className="w-full flex-1 resize-none rounded border-0 p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 bg-transparent focus:ring-0"
      placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."/>
    </form>
    )

  }
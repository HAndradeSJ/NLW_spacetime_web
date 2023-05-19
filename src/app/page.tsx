// importação
import {User} from 'lucide-react'
import Image from 'next/image'

import nwllogo from '../assets/logo.svg'
export default function Home() {
  
  return <main className="grid grid-cols-2 min-h-screen">
          <div className="flex flex-col items-start justify-between overflow-hidden px-28 py-16 relative  border-white/10 ">
              <div className="absolute right-0  top-1/2 h-[288px] w-[526px] -translet-y-1/2 translate-x-1/2 bg-purple-700 opacity-50 blur-full"/>
              <div className="absolute top-0 bottom-0  right-2 w-2 bg-stripes"/>

              <a href="" className="flex items-center gap-3 text-left">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
                    <User className='h-5 w-5 text-gray-500'/>
                </div>
                <p className='text-sm leading-snug max-w-[140px] hover:text-gray-50 transition-colors'><span className='underline'>Crie sua conta</span> e salve suas memórias!</p>
              </a>
              <div className='space-y-5'>
                  <Image src={nwllogo} alt={'logo nwl'} className=''/>
                  <div className='max-w-[420px] space-y-1'>
                        <h1 className='text-5xl font-sans leading-tight text-gray-50'>Sua cápsula do tempo </h1>
                        <p className='text-lg leading-relaxed'>Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!</p>
                        <button className='inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600'>Cadastrar Lembrança</button>
                  </div>
              </div>
              <div className='text-sm leading-relaxed text-gray-50'>
                  Feito com 💜 no NLW da <a className='underline hover:text-gray-100' href='https://rocketseat.com.br'>Rocketseat</a>
              </div>
          </div>
        


          <div className="flex flex-col p-16 bg-cover">
            <div className="flex flex-1 items-center justify-center">
              <p className="text-center leading-relaxed w-[360px]">Você ainda não registrou nenhuma lembrança, comece a {''}
              <a href="" className="underline hover:text-gray-50">criar agora!</a></p>
            </div>
          </div>
  </main>
}

// importação
import { cookies } from 'next/headers'
import { Copyrigth } from '@/components/Copyright'
import { EmptyMemories } from '@/components/EmptyMemories'
import { Hero } from '@/components/Hero'
import { Sigin } from '@/components/Sigin'
import { Profile } from '@/components/Profile'

export default function Home() {
  // pegando os cookies
  const autheticated = cookies().has('token')
  
  return <main className="grid grid-cols-2 min-h-screen">
          <div className="flex flex-col items-start justify-between overflow-hidden px-28 py-16 relative  border-white/10 ">
              <div className="absolute right-0  top-1/2 h-[288px] w-[526px] -translet-y-1/2 translate-x-1/2 bg-purple-700 opacity-50 blur-full"/>
              <div className="absolute top-0 bottom-0  right-2 w-2 bg-stripes"/>
             {autheticated ?<Profile/>:<Sigin/>}
             <Hero/>
             <Copyrigth/>
          </div>

        {/* ------------------------------------------ */}
          <div className="flex flex-col p-16 bg-cover">
                <EmptyMemories/>
          </div>
  </main>
}

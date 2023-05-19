import './globals.css'
import { Inter } from 'next/font/google'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree
} from 'next/font/google'

// Importando as fonts para usar no taillwnd

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({subsets:['latin'],variable:"--font-roboto"})
const baiJamjuree = BaiJamjuree({subsets:['latin'],weight:'700',variable:'--font-baiJamjuree'})

export const metadata = {
  title: 'NLW Spacetime',
  description: 'projeto do NlW da rockteseat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable}font-sans text-gray-100 bg-gray-900`}>{children}</body>
    </html>
  )
}

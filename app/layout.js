import './globals.css'

export const metadata = {
  title: 'Loja de Fone de ouvido',
  description: 'Loja de Fone de ouvido',
}

import { Inter } from 'next/font/google'
import Header from './Header'
import Footer from './Footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <Script src="https://kit.fontawesome.com/6117d8c460.js"/>
      </head>
      <body className={'bg-gray-800 min-w-screen min-h-screen flex flex-col relative ' + inter.className}>
        <Header />
        <div className='flex-1'>
          {children}
        </div>
        <div id="portal"></div>
        <Footer />
      </body>
    </html>
  )
}

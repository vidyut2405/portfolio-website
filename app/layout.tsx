import './globals.css'
import { Inter } from 'next/font/google'
import ThreeBackground from '@/components/three-background'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vidyut | Portfolio',
  description: 'Portfolio of Vidyut',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className}  bg-black text-gray-100 relative pt-28 sm:36`}>
        <ThreeBackground />
        <Header />

        {children}</body>
    </html>
  )
}

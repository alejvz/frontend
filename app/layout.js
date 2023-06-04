
import '../styles/global.css'
import { Inter } from 'next/font/google'
import Analytics from '@/components/Analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vasky',
  description: 'Bigdata and AI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
      <link rel="icon"  href="/assets/vasky.png" />
      <Analytics />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

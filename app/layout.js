
import '../styles/global.css'
import { Inter } from 'next/font/google'

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
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

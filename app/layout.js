
import '../styles/global.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lulai',
  description: 'foodtech and AI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/assets/lulai.png" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

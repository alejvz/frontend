
import '../styles/global.css'
import { Inter } from 'next/font/google'
const GA_TRACKING_ID = 'G-13VVY5R2D1'
import Document, { Html, Head, Main, NextScript } from 'next/document'

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
      <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

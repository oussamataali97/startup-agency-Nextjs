
import '../styles/global.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Startup - agency',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon"  href="/assets/favicon-32x32.png" />
      </head>
      <body className={inter.className}>{children}</body>

    </html>
  )
}

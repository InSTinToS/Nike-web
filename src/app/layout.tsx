'use client'
import './globals.css'
import { ReactNode } from 'react'
import Navbar from '@components/templates/Navbar'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head />

      <body>
        <Navbar />

        {children}
      </body>
    </html>
  )
}

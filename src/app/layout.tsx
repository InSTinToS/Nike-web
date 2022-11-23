import { ReactNode } from 'react'
import './globals.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head />

      <body className='text-red-500'>{children}</body>
    </html>
  )
}

import './globals.css'

import Navbar from '@src/components/templates/Navbar'

import { PropsWithChildren } from 'react'

export default function RootLayout({ children }: PropsWithChildren) {
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

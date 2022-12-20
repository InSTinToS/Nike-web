'use client'

import './globals.css'

import Navbar from '@src/components/templates/Navbar'

import { PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html>
      <head></head>

      <body>
        <Navbar />

        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />

          {children}
        </QueryClientProvider>
      </body>
    </html>
  )
}

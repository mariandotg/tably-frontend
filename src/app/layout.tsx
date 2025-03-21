import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import Navbar from '@/components/ui/navbar'
import { AuthProvider } from '@/contexts/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tably - tabs manager',
  description: 'Created by Mariano Guillaume (@mariandotg)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}

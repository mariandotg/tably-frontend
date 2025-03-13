import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'

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
      <nav className="bg-[#192048] text-sky-200">Tably</nav>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

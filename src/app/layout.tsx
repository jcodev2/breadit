import { Navbar } from '@/components/Navbar'
import { Toaster } from '@/components/ui/Toaster'
import { cn } from '@/libs/utils'
import { Inter } from 'next/font/google'

import { Providers } from '@/components/Providers'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Breadit',
  description: 'A Reddit clone built with Next.js and TypeScript.'
}

export default function RootLayout({
  children,
  authModal
}: {
  children: React.ReactNode
  authModal: React.ReactNode
}) {
  return (
    <html
      lang='en'
      className={cn(
        'light bg-white text-slate-900 antialiased',
        inter.className
      )}
    >
      <body className='min-h-screen overflow-x-hidden bg-slate-50 pt-12 antialiased'>
        <Providers>
          {/* @ts-expect-error server-component */}
          <Navbar />

          {authModal}

          <main className='container mx-auto h-full max-w-7xl pt-12'>
            {children}
          </main>

          <Toaster />
        </Providers>
      </body>
    </html>
  )
}

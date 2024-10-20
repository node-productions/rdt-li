import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import Script from 'next/script'
import { Toaster } from 'sonner'
import './globals.css'
import Provider from './provider'

export const metadata: Metadata = {
  title: 'ndpr.jp',
  description: 'An open source URL shortener.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-dvh bg-secondary font-sans antialiased')}>
        <Provider>
          {children}
          <Toaster expand={true} richColors />
        </Provider>
      </body>

      {/* optional: umami analytics */}
      {process.env.NEXT_PUBLIC_UMAMI_DOMAIN &&
        process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
          <Script
            async
            defer
            src={`https://${process.env.NEXT_PUBLIC_UMAMI_DOMAIN}/script.js`}
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
          />
        )}
    </html>
  )
}

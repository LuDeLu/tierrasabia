import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fundacion TierraSabia',
  description: 'Todo por un futuro natural para los niños',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

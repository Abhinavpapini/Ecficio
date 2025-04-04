import type { Metadata } from 'next'
import './globals.css'
import ScrollToTopButton from "./components/ScrollToTopButton"

export const metadata: Metadata = {
  title: 'Ecficio 7.0 ᴴ',
  description: 'Entruepreneurship Event',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  )
}

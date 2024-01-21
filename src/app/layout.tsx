import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from './providers'
import NavigationBar from './components/NavigationBar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Marc Vinokurov Portfolio',
  description: 'Portfolio website of Marc Vinokurov'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
            <NavigationBar />
          <main>{children}</main>
          <footer></footer>
        </Providers>
      </body>
    </html>
    </>
  )
}

import Provider from './Provider'
import Header from './components/Header/Header'
import Tabs from './components/Tabs/Tabs'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Movie App',
  description: 'Movie App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Provider>
          <Header />
          <Tabs />
          {children}
        </Provider>
      </body>
    </html>
  )
}

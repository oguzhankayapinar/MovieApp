import Provider from './Provider'
import Header from './components/Header/Header'
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
          {children}
        </Provider>
      </body>
    </html>
  )
}

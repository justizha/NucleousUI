import { Inter } from 'next/font/google';
import NavBar from '../components/NavBar';
import './globals.css';
export const metadata = {
  title: 'NextComponent',
}
const InterFont = Inter({
  weight: "400",
  subsets: ['latin'],
  display: 'swap'
})
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${InterFont.className}`}>
      <body className='bg-main-black'>
        <NavBar />
        <main className=''>
          {children}
        </main>
      </body>
    </html>
  )
}
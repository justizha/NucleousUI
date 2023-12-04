import { DM_Sans } from 'next/font/google';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import './globals.css';
export const metadata = {
  title: 'NextComponent',
}
const dmSans = DM_Sans({
  weight: "400",
  subsets: ['latin'],
  display: 'swap'
})
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${dmSans.className}`}>
      <body className='bg-main-black '>
        <NavBar />
        <main className='test'>
          {children}
        </main>
        <hr className='bg-main-gray' />
        <Footer />
      </body>
    </html>
  )
}
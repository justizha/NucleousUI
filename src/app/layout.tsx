import { Roboto } from 'next/font/google';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import './globals.css';
export const metadata = {
  title: 'NextComponent',
}
const roboto = Roboto({
  weight: "400",
  subsets: ['latin'],
  display: 'swap'
})
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${roboto.className}`}>
      <body className='bg-main-black '>
        <main className=''>
          <NavBar></NavBar>
          {children}
        </main>
        <hr className='bg-main-gray' />
        <Footer></Footer>
      </body>
    </html>
  )
}
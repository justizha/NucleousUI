import { Inter } from 'next/font/google';
import NavBar from '../components/NavBar';
import './globals.css';
export const metadata = {
  title: 'NucleousUi',
}
const InterFont = Inter({
  weight: "variable",
  subsets: ['latin']
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
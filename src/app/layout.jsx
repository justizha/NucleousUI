
import NavBar from '@/components/NavBar';
import './globals.css';

export const metadata = {
  title: 'NextComponent',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className='bg-bg-main-black'>
        <main>
          <NavBar>

          </NavBar>
          {children}
        </main>
        <footer className='w-full py-12 border-t border-gray-700'>
          <h1 className='text-white'>Footer</h1>
        </footer>
      </body>
    </html>
  )
}


import NavBar from '@/components/NavBar';
import './globals.css';

export const metadata = {
  title: 'NextComponent',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <main className='bg-main-black'>
          <NavBar>

          </NavBar>
          {children}
        </main>
        <footer className='w-full py-12 border-t border-gray-700 bg-main-black pb-32'>
          <div className='mx-8'>
            <h1 className='text-lg text-white font-black'>NexT</h1>
          </div>
        </footer>
      </body>
    </html>
  )
}

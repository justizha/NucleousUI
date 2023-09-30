
import NavBar from '@/components/NavBar';
import Link from 'next/link';
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
        <footer className='w-full  border-t border-gray-700 bg-main-black pb-32'>
          <div className='mx-8 grid md:grid-cols-4 md:gap-14 gap-8'>
            {/* first footer */}
            <div className='px-4 mt-4'>
              <h1 className='text-[34px] text-white font-black'>NexT Component.</h1>
              <p className='text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, natus.</p>
            </div>
            {/* second footer */}
            <div className='px-4 mt-4'>
              <h1 className='font-bold text-[34px]'>Quick Links.</h1>
              <ul className='list-none'>
                <li>
                  <Link href={"#"}>About</Link>
                </li>
                <li>
                  <Link href={"#"}>Guide</Link>
                </li>
                <li>
                  <Link href={'#'}>Design</Link>
                </li>
                <li>
                  <Link href={"#"}>Documentation</Link>
                </li>
              </ul>
            </div>
            {/* third footer */}
            <div className='px-4 mt-4'>
              <h1 className='font-bold text-[34px]'>Contacts.</h1>
              <ul className='list-none'>

              </ul>
            </div>
            {/* fourth footer */}
            <div className='px-4 mt-4'>
              <h1 className='text-[34px] font-bold'>Social Media.</h1>
            </div>
            {/* bottom/ last section */}
          </div>
          <div className='flex justify-center relative top-20'>
            <p className='text-gray-400'>Copyright Alfath Izha Barikallah</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

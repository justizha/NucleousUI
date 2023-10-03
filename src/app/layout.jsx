
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
          <div className='flex md:flex-row flex-col justify-between mx-4 '>
            {/* first footer */}
            <div className='px-4 mt-4'>
              <h1 className='text-[28px] text-white font-black'>NexT-Component.</h1>
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


            {/* bottom/ last section */}
          </div>
          <div className='flex justify-between relative top-20  items-center border-t border-gray-600'>
            <div className='mx-10 mt-10'>
              <p className='text-gray-400'>© Alfath Izha Barikallah</p>
            </div>
            <div className='mx-10 mt-10'>
              <div className='flex gap-4 items-center'>
                <a href="https://www.instagram.com/popflash1z/" className='cursor-pointer' target='_blank'>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="instagram" className='w-6 h-6' />
                </a>
                <a href="https://www.instagram.com/popflash1z/" className='cursor-pointer' target='_blank'>
                  <img src="https://freelogopng.com/images/all_img/1690643640twitter-x-icon-png.png" alt="x (tweeter)" className='w-7 h-7' />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

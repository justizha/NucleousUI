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
        <footer className='w-full border-t border-gray-700 bg-main-black pb-24'>
          <div className='md:flex md:justify-center md:gap-24 grid grid-cols-2 mx-auto'>
            {/* first footer */}
            <div className='px-4 mt-4'>
              <h1 className='text-base text-white font-black'>NexT-Component.</h1>
            </div>
            {/* second footer */}
            <div className='px-4 mt-4'>
              <h1 className='font-semibold text-base'>Resources</h1>
              <ul className='list-none text-gray-400'>
                <li>
                  <Link className='hover:text-gray-200 duration-500  text-sm' href={"/about"}>About</Link>
                </li>
                <li>
                  <Link className='hover:text-gray-200 duration-500  text-sm' href={"#"}>Guide</Link>
                </li>
                <li>
                  <Link className='hover:text-gray-200 duration-500  text-sm' href={"#"}>Design</Link>
                </li>
                <li>
                  <Link className='hover:text-gray-200 duration-500  text-sm' href={"#"}>Docs</Link>
                </li>
              </ul>
            </div>
            {/* third footer */}
            <div className='px-4 mt-4'>
              <h1 className='font-semibold text-base'>More</h1>
              <ul className='text-gray-400'>
                <li className='hover:text-gray-200 duration-560 text-sm'>
                  <a href="https://github.com/justizha/NextDesignComponent">
                    Github
                  </a>
                </li>
                <li className='hover:text-gray-200 duration-560 text-sm'>
                  <a href="https://github.com/justizha/NextDesignComponent/releases">
                    Release
                  </a>
                </li>
                <li className='hover:text-gray-200 duration-500 text-sm'>
                  <a href="https://nextjs.org/docs" className='cursor-pointer' target='_blank'>
                    Learn Next js
                  </a>
                </li>
              </ul>
            </div>
            {/* fourth footer */}
            <div className='px-4 mt-4'>
              <h1 className='font-semibold text-base'>Contacts.</h1>
              <ul className='list-none'>
                <li className='text-sm text-gray-400'>
                  <p>+ 62-831-0630-7593</p>
                </li>
                <li className='text-sm text-gray-400'>
                  <p className='break-words'>alfathizhaaaaaaa@gmail.com</p>
                </li>
                <li></li>
              </ul>
              <div className='mt-10'>
                <div className='flex gap-4 items-center'>
                  <a href="https://www.instagram.com/popflash1z/" className='cursor-pointer bg-white' target='_blank'>
                    <img src="https://seeklogo.com/images/I/instagram-logo-E0067A1403-seeklogo.com.png" alt="instagram" className='w-7 h-7 object-contain' />
                  </a>
                  <a href="https://twitter.com/justTh1z" className='cursor-pointer' target='_blank'>
                    <img src="https://freelogopng.com/images/all_img/1690643640twitter-x-icon-png.png" alt="x (tweeter)" className='w-7 h-7 object-contain' />
                  </a>
                </div>
              </div>
            </div>
            {/* bottom/ last section */}
          </div>
          <div className='flex justify-between relative top-20  items-center border-t border-gray-600'>
            <div className='mx-10 mt-10'>
              <p className='text-gray-400 text-xs '>©Alfath Izha Barikallah</p>
            </div>

          </div>
        </footer>
      </body>
    </html>
  )
}
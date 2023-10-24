import Link from 'next/link';
import NavBar from '../components/NavBar';
import './globals.css';
export const metadata = {
  title: 'NextComponent',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-bg-main-black'>
      <body className='bg-main-black'>
        <main className=''>
          <NavBar></NavBar>
          {children}
        </main>
        <hr className='bg-main-gray' />
        <footer className='w-full pt-3 pb-4 md:pb-10 bg-main-black'>
          <div className='md:flex md:justify-center md:gap-24 grid grid-cols-2 mx-auto'>
            {/* first footer */}
            <div className='px-4 mt-4 mb-2'>
              <div className=' mt-1'>
                <h1 className='text-base text-white font-black'>NexT-Component.</h1>
              </div>
              <div className=' mt-1'>
                <p className='text-gray-400 text-sm '>©Alfath Izha Barikallah</p>
              </div>
            </div>
            {/* second footer */}
            <div className='px-4 mt-4 mb-2'>
              <h1 className='font-semibold text-base text-white'>Resources</h1>
              <ul className='list-none text-gray-400'>
                <li className='mb-3'>
                  <Link className='hover:text-gray-200 duration-500  text-sm' href={"/about"}>About</Link>
                </li>
                <li className='mb-3'>
                  <Link className='hover:text-gray-200 duration-500  text-sm' href={"#"}>Guide</Link>
                </li>
                <li className='mb-3'>
                  <Link className='hover:text-gray-200 duration-500  text-sm' href={"#"}>Design</Link>
                </li>
                <li className='mb-3'>
                  <Link className='hover:text-gray-200 duration-500  text-sm' href={"#"}>Docs</Link>
                </li>
              </ul>
            </div>
            {/* third footer */}
            <div className='px-4 mt-4'>
              <h1 className='font-semibold text-base text-white mb-2'>More</h1>
              <ul className='text-gray-400'>
                <li className='hover:text-gray-200 duration-560 text-sm mb-3'>
                  <a href="https://github.com/justizha/NextDesignComponent">
                    Github
                  </a>
                </li>
                <li className='hover:text-gray-200 duration-560 text-sm mb-3'>
                  <a href="https://github.com/justizha/NextDesignComponent/releases">
                    Release
                  </a>
                </li>
                <li className='hover:text-gray-200 duration-500 text-sm mb-3'>
                  <a href="https://nextjs.org/docs" className='cursor-pointer' target='_blank'>
                    Learn Next js
                  </a>
                </li>
              </ul>
            </div>
            {/* fourth footer */}
            <div className='px-4 mt-4'>
              <h1 className='font-semibold text-base text-white'>Contacts.</h1>
              <ul className='list-none'>
                <li className='text-sm text-gray-400'>
                  <p>+ 62-831-0630-7593</p>
                </li>
                <li className='text-sm text-gray-400'>
                  <p className='break-words'>alfathizhaaaaaaa@gmail.com</p>
                </li>
              </ul>
            </div>
            <div className='px-4 mt-4'>
              <h1 className='font-semibold text-base text-white'>Socials.</h1>
              <div className='mt-2'>
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

        </footer>
      </body>

    </html>
  )
}
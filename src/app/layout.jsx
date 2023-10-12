
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
              <p className='text-gray-400 md:text-base text-sm ml-2 mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, quasi?</p>
            </div>
            {/* second footer */}
            <div className='px-4 mt-4'>
              <h1 className='font-bold text-[34px]'>Quick Links.</h1>
              <ul className='list-none text-gray-400 ml-2'>
                <li>
                  <Link className='hover:text-gray-200 duration-500 md:text-base text-sm' href={"/about"}>About</Link>
                </li>
                <li>
                  <Link className='hover:text-gray-200 duration-500 md:text-base text-sm' href={"#"}>Guide</Link>
                </li>
                <li>
                  <Link className='hover:text-gray-200 duration-500 md:text-base text-sm' href={"#"}>Design</Link>
                </li>
                <li>
                  <Link className='hover:text-gray-200 duration-500 md:text-base text-sm' href={"#"}>Documentation</Link>
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
              <p className='text-gray-400 text-xs md:text-base'>©Alfath Izha Barikallah</p>
            </div>
            <div className='mx-10 mt-10'>
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
        </footer>
      </body>
    </html>
  )
}

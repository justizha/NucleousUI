import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-main-dark">
      <div className="mx-auto grid grid-cols-2 md:flex md:justify-center md:gap-24">
        <div className="mb-2 mt-4 px-4">
          <div className=" mt-1">
            <h1 className="text-base font-black text-white">NexT-Component.</h1>
          </div>
          <div className=" mt-1">
            <p className="text-sm text-gray-400 ">©Alfath Izha Barikallah</p>
          </div>
        </div>
        <div className="mb-2 mt-4 px-4">
          <h1 className="text-base font-semibold text-white">Resources</h1>
          <ul className="list-none text-gray-400">
            <li className="mb-3">
              <Link
                className="text-sm duration-500  hover:text-gray-200"
                href={"/about"}
              >
                About
              </Link>
            </li>
            <li className="mb-3">
              <Link
                className="text-sm duration-500  hover:text-gray-200"
                href={"#"}
              >
                Guide
              </Link>
            </li>
            <li className="mb-3">
              <Link
                className="text-sm duration-500  hover:text-gray-200"
                href={"#"}
              >
                Design
              </Link>
            </li>
            <li className="mb-3">
              <Link
                className="text-sm duration-500  hover:text-gray-200"
                href={"#"}
              >
                Docs
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-4 px-4">
          <h1 className="mb-2 text-base font-semibold text-white">More</h1>
          <ul className="text-gray-400">
            <li className="duration-560 mb-3 text-sm hover:text-gray-200">
              <a
                href="https://github.com/justizha/NextDesignComponent"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
            <li className="duration-560 mb-3 text-sm hover:text-gray-200">
              <a
                href="https://github.com/justizha/NextDesignComponent/releases"
                target="_blank"
                rel="noreferrer"
              >
                Release
              </a>
            </li>
            <li className="mb-3 text-sm duration-500 hover:text-gray-200">
              <a
                href="https://nextjs.org/docs"
                className="cursor-pointer"
                target="_blank"
                rel="noreferrer"
              >
                Learn Next js
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-4 px-4">
          <h1 className="text-base font-semibold text-white">Contacts.</h1>
          <ul className="list-none">
            <li className="text-sm text-gray-400">
              <p>+ 62-831-0630-7593</p>
            </li>
            <li className="text-sm text-gray-400">
              <p className="break-words">alfathizhaaaaaaa@gmail.com</p>
            </li>
          </ul>
        </div>
        <div className="mt-4 px-4">
          <h1 className="text-base font-semibold text-white">Socials.</h1>
          <div className="mt-2">
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/popflash1z/"
                className="cursor-pointer bg-white"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://seeklogo.com/images/I/instagram-logo-E0067A1403-seeklogo.com.png"
                  alt="instagram"
                  className="h-7 w-7 object-contain"
                />
              </a>
              <a
                href="https://twitter.com/justTh1z"
                className="cursor-pointer"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://freelogopng.com/images/all_img/1690643640twitter-x-icon-png.png"
                  alt="x (tweeter)"
                  className="h-7 w-7 object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

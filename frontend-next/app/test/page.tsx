import Link from "next/link";
import Image from "next/image";
import { BiNews, BiBitcoin, BiInfoCircle } from "react-icons/bi";
import { VscEye } from "react-icons/vsc";

export default function Navbar() {
  return (
    <div className="z-10 shadow-2xl fixed px-10 md:px-0 bg-secondary h-28 w-full md:h-screen md:w-52 md:flex md:flex-col">
      <div className="flex md:block">
        <Link href="/">
          <div className="flex items-center md:justify-center w-full gap-3 cursor-pointer">
            <Image alt="xx"
              className="text-slate-50"
              src="/logo.png"
              width={20}
              height={20}
            />

            <a className="flex items-center h-16 text-xl font-bold text-indigo-50/70 hover:text-indigo-50">
              CryptoPlace
            </a>
          </div>
        </Link>


      </div>

      {/* NAVIGATION */}
      <nav className="flex justify-between md:justify-start md:flex-col text-indigo-50/70 flex-1 w-full text-lg md:mt-32">
        <Link href="/cryptos"
          className="md:pl-5 mb-6 flex justify-start items-center hover:text-indigo-50 md:hover:border-r-4 hover:border-indigo-500">
            <BiBitcoin size={20} className="mr-2" />
            <span className="hidden sm:inline-block">Cryptocurrencies</span>
        </Link>
        <Link href="/news"
           className="md:pl-5 mb-6 flex justify-start items-center hover:text-indigo-50 md:hover:border-r-4 hover:border-indigo-500">
            <BiNews size={20} className="mr-2" />
            <span className="hidden sm:inline-block">News</span>
          
        </Link>
        <Link href="/watchlist"
          className="md:pl-5 mb-6 flex justify-start items-center hover:text-indigo-50 md:hover:border-r-4 hover:border-indigo-500">
            <VscEye size={20} className="mr-2" />
            <span className="hidden sm:inline-block">Watchlist</span>
          
        </Link>
        <Link href="/about"
           className="md:pl-5 mb-6 flex justify-start items-center hover:text-indigo-50 md:hover:border-r-4 hover:border-indigo-500">
            <BiInfoCircle size={20} className="mr-2" />
            <span className="hidden sm:inline-block">About</span>
          
        </Link>
      </nav>
    </div>
  );
}

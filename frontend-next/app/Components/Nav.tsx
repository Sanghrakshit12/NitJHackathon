"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AuthButtons from "./forms/authbutton";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";

export default function Nav() {
  const router = useRouter();
  return (
    <>
      <div className="fixed left-0 right-0  top-0 z-10 border-b bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-500 from-30%  py-3">
        <div className="container mx-auto flex items-center justify-between px-6">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center gap-x-2 font-serif text-2xl font-extrabold text-yellow-400 tracking-wider"
            >
              🅑🅔 CRYPTOxAI
            </Link>
          </div>

          <div className="hidden items-center gap-x-8 md:flex">
            <Link
              href="https://crypto-sand-ten.vercel.app/"
              className="relative group font-serif text-white transition duration-300 ease-in-out transform hover:scale-105"
            >
              Market
              <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
            <Link
              href="/trade"
              className="relative group font-serif text-white transition duration-300 ease-in-out transform hover:scale-105"
            >
              Trade
              <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1X6gnck4XwoY7YGqPxe3ReztPepbUo5oi/view"
              className="relative group font-serif text-white transition duration-300 ease-in-out transform hover:scale-105"
            >
              About
              <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
          </div>
          <div className="flex items-center ">
            <AuthButtons />
          </div>
        </div>
      </div>

      <div className="mt-14 min-h-screen flex flex-col items-center md:mt-16 md:flex-row lg:mt-5">
        <section className="flex-1 md:ml-20 lg:ml-52">

          <div className="flex flex-col justify-center gap-6 rounded-lg bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-500 from-30% px-6 py-10 md:w-4/5 md:px-10">
            <p className="text-4xl font-serif font-bold text-white md:text-4xl md:leading-tight">
              CryptoxAI
            </p>
            <p className="text-xl font-semibold font-serif text-white md:text-2xl md:leading-relaxed">
              Empowering Your Cryptocurrency Journey with AI-driven Insights
            </p>
            <Link
              href="/signup"
              className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            >
              <span className="text-lg font-semibold">Sign Up</span><ArrowRightIcon className="w-3 md:w-4" />
            </Link>
          </div>

        </section>
        <div className="flex justify-center md:w-1/3 md:justify-end">
          <div className="m-10">
            <Image src="/phone1.png" alt="image" width={620} height={640} />
          </div>
        </div>
      </div>
      <div className="flex min-h-screen items-center justify-center mb-20">
        <div className="grid grid-cols-2 gap-x-10 gap-y-20">
          <div className="max-w-sm overflow-hidden rounded bg-indigo-900 hover:bg-gradient-to-r from-purple-900 to-indigo-900 from-40% shadow-lg">
            <div className="px-10 py-6">
              <div className="mb-4 text-center text-xl font-bold text-white">
                Buy Crypto
              </div>
              <p className="pb-5 text-center text-base text-white mb-5">
                BUY BTC, ETH, and other crypto easily via bank transfer
              </p>
              <Image src="/buy.jpg" alt="image" width={500} height={200} />
            </div>
          </div>
          <div className="max-w-sm overflow-hidden rounded bg-indigo-900 hover:bg-gradient-to-l from-purple-900 to-indigo-900 from-70% shadow-lg">
            <div className="px-10 py-6">
              <div className="mb-4 pb-5 text-center text-xl font-bold text-white">
                Recurring Buy
              </div>
              <p className="text-center text-base text-white mb-5">
                Grow your portfolio automatically with daily, weekly, or monthly
                trades.
              </p>
              <Image src="/buying.jpg" alt="image" width={620} height={640} />
            </div>
          </div>
          <div className="max-w-sm overflow-hidden rounded bg-indigo-900 hover:bg-gradient-to-r from-purple-900 to-indigo-900 from-40% shadow-lg">

            <div className="px-10 py-6">
              <div className="mb-4 text-center text-xl font-bold text-white">
                Price Alert
              </div>
              <p className="text-center text-base text-white mb-10">
                Be notified on BTC, ETH prices and more
              </p>
              <Image src="/alert.jpeg" alt="image" width={620} height={640} />
            </div>

          </div>
          <div className="max-w-sm overflow-hidden rounded bg-indigo-900 hover:bg-gradient-to-l from-purple-900 to-indigo-900 from-70% shadow-lg">

            <div className="px-10 py-6">
              <div className="mb-4 text-center text-xl font-bold text-white">
                Trade on the go
              </div>
              <p className="text-center text-base text-white mb-5">
                Anywhere, anytime. Compatible with all browsers
              </p>
              <Image src="/anywhere.jpg" alt="image" width={620} height={640} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-black">
        <div className="flex min-h-screen justify-left items-center bg-sky-100 border-2 border-[#fe8d88]">
          <div className="flex-1 order-1 p-8">
            <div className="text-4xl mb-4 font-anton">Analyze your portfolio</div>
            <div className="text-2xl mb-4">AI driven insights that help user anticipate market analysis.</div>
          </div>
          <div className="flex-1 order-2 p-8">
            <Image src="/portfolioanalyze.png" alt="portfolio" width={580} height={510} />
          </div>
        </div>

        <div className="flex min-h-screen justify-left items-center bg-indigo-400">
          <div className="flex-1 order-2 p-8">
            <div className="text-4xl mb-4 font-anton">Price Prediction</div>
            <div className="text-2xl mb-4">Get 3 day future price prediction using sentiment analysis.</div>
          </div>
          <div className="flex-1 order-1 p-8">
            <Image src="/pricepredict.png" alt="portfolio" width={580} height={510} />
          </div>
        </div>

        <div className="flex min-h-screen justify-left items-center bg-violet-100 border-2 border-[#fe8d88]">
          <div className="flex-1 order-1 p-8 ml-7 ">
            <div className="text-4xl mb-4 font-anton">Market Analysis</div>
            <div className="text-2xl mb-4">View real-time cryptocurrencies data & trends.</div>
          </div>
          <div className="flex-1 order-2 p-8">
            <Image src="/marketanalysis.png" alt="portfolio" width={580} height={510} />
          </div>
        </div>

        <div className="flex min-h-screen justify-left items-center bg-sky-100">
          <div className="flex-1 order-2 p-8">
            <div className="text-4xl mb-4 font-anton">Security</div>
            <div className="text-2xl mb-4">Integration of Blockchain for decentralized storage.</div>
          </div>
          <div className="flex-1 order-1 p-8">
            <Image src="/blockchain.png" alt="portfolio" width={580} height={510} />
          </div>
        </div>
      </div>

      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="text-center space-y-5 ">
          <div className="mt-20 lg:mt-35 text-white text-[50px] font-pacifico">
            Then what are you waiting for
          </div>
          <div className="text-white text-3xl font-anton tracking-2xl">
            Start Trading with CryptoXAI
          </div>
          <button className="bg-yellow-500 text-white py-2 px-6 rounded-3xl hover:bg-white hover:text-black  transition duration-300">
            Let's Go
          </button>
        </div>
      </div>


      <footer className="mt-4 bg-gradient-to-r from-indigo-900 from-30% to-purple-900  py-8 pb-4 text-white">
        <div className="px- container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-bold">Crypto Exchange</h3>
            <p className="text-sm">
              Your go-to platform for trading Bitcoin, Ethereum, and other
              cryptocurrencies.
            </p>
          </div>
          <div>
            <h3 className="mb-4 ml-40 text-lg font-bold">Quick Links</h3>
            <ul className="ml-40">
              <li className="mb-2">
                <Link
                  href="https://crypto-sand-ten.vercel.app/"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Market
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/trade"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Trade
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="https://drive.google.com/file/d/1X6gnck4XwoY7YGqPxe3ReztPepbUo5oi/view"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 pl-40 text-lg font-bold">Follow Us</h3>
            <div className="flex space-x-4 pl-40">
              <Link
                href="https://x.com/Sanghrakshit12"
                className="text-gray-200 hover:text-white"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.555-2.003.959-3.127 1.184-.897-.959-2.173-1.559-3.59-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.088-.205-7.719-2.165-10.148-5.144-.422.722-.666 1.561-.666 2.457 0 1.69.861 3.178 2.168 4.048-.801-.026-1.555-.246-2.21-.616v.061c0 2.362 1.679 4.337 3.907 4.778-.409.111-.84.171-1.284.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.415-1.68 1.319-3.809 2.105-6.102 2.105-.397 0-.79-.023-1.177-.067 2.179 1.393 4.768 2.207 7.548 2.207 9.054 0 14.002-7.5 14.002-14.002 0-.209 0-.42-.015-.631.961-.695 1.8-1.562 2.462-2.549z" />
                </svg>
              </Link>
              <Link
                href="https://github.com/Sanghrakshit12"
                className="text-gray-200 hover:text-white"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35c-.73 0-1.325.595-1.325 1.325v21.351c0 .729.595 1.324 1.325 1.324h11.498v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.919.001c-1.504 0-1.794.715-1.794 1.762v2.314h3.588l-.467 3.622h-3.12v9.293h6.116c.73 0 1.324-.595 1.324-1.324v-21.35c0-.73-.594-1.325-1.324-1.325z" />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/in/sanghrakshit/"
                className="text-gray-200 hover:text-white"
              >
                <svg
                  className="h-6 w-6 "
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.616 3.017c1.179 0 2.134.955 2.134 2.134s-.955 2.134-2.134 2.134-2.134-.955-2.134-2.134.955-2.134 2.134-2.134zM9.847 8.143h-3.713v12.922h3.713v-12.922zM8.001 4.978c-1.19 0-2.155.965-2.155 2.155s.965 2.155 2.155 2.155 2.155-.965 2.155-2.155-.965-2.155-2.155-2.155zM15.136 8.143h-3.711v12.922h3.711v-6.505c0-2.576 3.308-2.793 3.308 0v6.505h3.711v-7.359c0-5.172-6.187-4.988-6.187 0v7.359h-.132v-12.922h-.132z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-4 border-t border-gray-700 pt-4">
          <p className="text-center text-sm text-gray-100">
            © 2024 Crypto Exchange. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

import Menu from '../assets/menu.svg'
import LogoImg from '../assets/moonex-img.png'
import Close from '../assets/close-white.svg'
import { useState } from 'react'




export const Header = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <header className="sticky top-0 z-50 py-3 bg-primary backdrop-blur-md">
      <div className="container mx-auto px-4">

        <div className="flex items-center justify-between">

          <div className="flex">
            <img
              src={LogoImg}
              width={150}
              height={150}
              alt="Logo Icon"
              className="ml-10"
            />
          </div>

          <div className="hidden md:flex items-center gap-6 mx-auto">
            <nav className="flex gap-6 text-white font-bold">
              <a href="#" className="text-yellow-200 hover:text-yellow-300">
                Home
              </a>
              <a href="#" className="hover:text-yellow-300">
                About Us
              </a>
              <a href="#" className="hover:text-yellow-300">
                Roadmap
              </a>
              <a href="#" className="hover:text-yellow-300">
                FAQs
              </a>
              <a href="#" className="hover:text-yellow-300">
                Contact Us
              </a>
            </nav>
          </div>

          <button className="hidden md:block bg-gradient-to-r from-yellow-300 to-yellow-100 text-black font-bold px-4 py-2 rounded-full tracking-tight hover:bg-yellow-200">
            Connect Wallet
          </button>

          <button
            className="block md:hidden text-white focus:outline-none"
            onClick={toggleNavbar}
          >
            {mobileDrawerOpen ? <img src={Close} alt='Menu' width={25} /> : <img src={Menu} alt='Menu' width={25} />}
          </button>
        </div>


        {mobileDrawerOpen && (
          <nav className="md:hidden bg-primary py-4 px-6 text-white font-bold rounded-lg shadow-lg mt-2">
            <ul className="space-y-4 text-center">
              <li>
                <a href="#" className="text-yellow-200 hover:text-yellow-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  Contact Us
                </a>
              </li>
              <li>
                <button className="bg-gradient-to-r from-yellow-300 to-yellow-100 text-black font-bold px-4 py-2 rounded-full tracking-tight hover:bg-yellow-200 w-full">
                  Connect Wallet
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};


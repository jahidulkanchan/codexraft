import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-5 left-0 right-0 z-50 transition-transform duration-300`}>
      <nav
        className="animation-container py-1 px-2 md:px-4 rounded-xl bg-black/30 backdrop-blur-sm shadow-lg flex items-center justify-between transition-all duration-300 mx-auto md:w-[90vw] max-w-[1280px]"
        id="navbar">
        {/* Logo */}
        <div className="logo">
          <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
            <img className="w-[150px] md:w-[180px] rounded-lg object-cover" src="/assets/logo.png" alt="PixoraNest Logo" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex text-light-gray items-center gap-10">
          <li className="relative group">
            <span className="absolute w-full duration-300 scale-x-0 group-hover:scale-x-100 origin-center h-[2.5px] blue-gradient bottom-0"></span>
            <Link to="/" className="nav-link hover:text-white duration-150 text-base font-medium relative">
              Home
            </Link>
          </li>
          <li className="relative group">
            <span className="absolute w-full duration-300 scale-x-0 group-hover:scale-x-100 origin-center h-[2.5px] blue-gradient bottom-0"></span>
            <Link to="/services" className="nav-link hover:text-white duration-150 text-base font-medium relative">
              Services
            </Link>
          </li>
          <li className="relative group">
            <span className="absolute w-full duration-300 scale-x-0 group-hover:scale-x-100 origin-center h-[2.5px] blue-gradient bottom-0"></span>
            <Link to="/contact" className=" hover:text-white text-base font-medium relative">
              Contact
            </Link>
          </li>
        </ul>

        {/* Right Side: Contact Button and Mobile Menu Trigger */}
        <div className="flex items-center gap-3">
          {/* Contact Button */}
          <Link to="/contact" className="blue-gradient shadow-xl text-white text-shadow shadow-light-blue/30 hidden md:flex group items-center gap-1 rounded px-2.5 py-2">
            Get in touch
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-12 transition" />
          </Link>

          {/* Mobile Menu Trigger */}
          <button onClick={toggleMobileMenu} className="lg:hidden mr-2" aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}>
            <div className="hamburger">
              <svg viewBox="0 0 32 32" className={`w-10 h-10 transition-transform duration-600 ease-[cubic-bezier(0.4,0,0.2,1)]`}>
                <path
                  className={`line line-top-bottom ${isMobileMenuOpen ? '!stroke-dasharray-[20_300] !stroke-dashoffset-[-32.42]' : ''}`}
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                />
                <path className="line" d="M7 16 27 16" />
              </svg>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile_menu"
        className={`mobile-menu fixed top-0 left-0 w-full bg-dark-bg text-white h-screen p-4 transition-all duration-300 lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center mb-6">
          <div className="logo">
            <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
              <img className="w-[170px] rounded-lg object-cover" src="/assets/logo.png" alt="PixoraNest Logo" />
            </Link>
          </div>
          <button onClick={toggleMobileMenu} className="lg:hidden" aria-label="Close menu">
            <X className="cursor-pointer w-[35px] h-[35px]" />
          </button>
        </div>
        <ul className="flex text-light-gray flex-col gap-4">
          <li className="relative group w-fit">
            <span className="absolute w-full duration-300 scale-x-0 group-hover:scale-x-100 origin-center h-[2.5px] blue-gradient bottom-0"></span>
            <Link to="/" onClick={toggleMobileMenu} className=" hover:text-white duration-150 text-base font-medium relative">
              Home
            </Link>
          </li>
          <li className="relative group w-fit">
            <span className="absolute w-full duration-300 scale-x-0 group-hover:scale-x-100 origin-center h-[2.5px] blue-gradient bottom-0"></span>
            <Link to="/services" onClick={toggleMobileMenu} className=" hover:text-white text-base font-medium relative">
              Services
            </Link>
          </li>
          <li className="relative group w-fit">
            <span className="absolute w-full duration-300 scale-x-0 group-hover:scale-x-100 origin-center h-[2.5px] blue-gradient bottom-0"></span>
            <Link to="/projects" onClick={toggleMobileMenu} className=" hover:text-white text-base font-medium relative">
              Projects
            </Link>
          </li>
          <li className="relative group w-fit">
            <span className="absolute w-full duration-300 scale-x-0 group-hover:scale-x-100 origin-center h-[2.5px] blue-gradient bottom-0"></span>
            <Link to="/about-us" onClick={toggleMobileMenu} className=" hover:text-white text-base font-medium relative">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMobileMenu} className="blue-gradient w-fit text-white group flex items-center gap-1 rounded px-3 py-2.5">
              Get in touch <ArrowUpRight className="w-5 h-5 text-white group-hover:rotate-12 transition" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

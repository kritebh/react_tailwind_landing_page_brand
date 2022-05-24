import React, { useState } from "react";
import { Link } from 'react-scroll'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function openNavbar() {
    setIsOpen(!isOpen);

  }

  function closeNavbar(){
    setIsOpen(!isOpen)
  }

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg ">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">Brand.</h1>
          <ul className="hidden md:flex hover:cursor-pointer ">

            <li className="hover:text-indigo-600"><Link to="home" smooth={true} offset={10} duration={500} >Home</Link></li>
            <li className="hover:text-indigo-600"><Link to="about" smooth={true} offset={-200} duration={500} >About</Link></li>
            <li className="hover:text-indigo-600"><Link to="support" smooth={true} offset={-50} duration={500} >Support</Link></li>
            <li className="hover:text-indigo-600"><Link to="platform" smooth={true} offset={-100} duration={500} >Platforms</Link></li>
            <li className="hover:text-indigo-600"><Link to="pricing" smooth={true} offset={-50} duration={500} >Pricing</Link></li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
        <div className="md:hidden mr-4" onClick={openNavbar}>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </div>
      </div>
      {isOpen && (
        <ul className="absolute bg-zinc-200 w-full px-8 hover:cursor-pointer">
          <li className="border-b-2 border-zinc-300 w-full"><Link onClick={closeNavbar} to="home" smooth={true} offset={10} duration={500} >Home</Link></li>
          <li className="border-b-2 border-zinc-300 w-full"><Link onClick={closeNavbar} to="about" smooth={true} offset={-200} duration={500} >About</Link></li>
          <li className="border-b-2 border-zinc-300 w-full"><Link onClick={closeNavbar} to="support" smooth={true} offset={-50} duration={500} >Support</Link></li>
          <li className="border-b-2 border-zinc-300 w-full"><Link onClick={closeNavbar} to="platform" smooth={true} offset={-100} duration={500} >Platforms</Link></li>
          <li className="border-b-2 border-zinc-300 w-full"><Link onClick={closeNavbar} to="pricing" smooth={true} offset={-50} duration={500} >Pricing</Link></li>

          <div className="flex flex-col my-4">
            <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
              Sign In
            </button>
            <button className="px-8 py-3">Sign Up</button>
          </div>
        </ul>
      )}
    </div>
  );
};

export default Navbar;

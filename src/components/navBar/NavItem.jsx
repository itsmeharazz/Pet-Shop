import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { FiX } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { BsBasket2 } from "react-icons/bs";

const NavItem = ({ setShowLogin }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const location = useLocation();

  const navMenu = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/about", label: "About" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <ul className='hidden lg:flex gap-6 text-lg'>
        {navMenu.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className={`text-[#efeeee] hover:text-[#ffe040] ${
                location.pathname === item.to
                  ? "text-amber-200 border-b-2 border-[#ffe040]"
                  : ""
              }`}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile menu icon */}
      <div className='lg:hidden z-50'>
        <button onClick={toggleMenu} className='cursor-pointer'>
          {isMenuOpen ? (
            <FiX className='w-5 h-5' />
          ) : (
            <FaBarsStaggered className='w-5 h-5 text-[#a2a2a2]' />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`lg:hidden fixed top-0 left-0 w-full h-[100vh] bg-[#4b2f37] text-white z-40 transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform ease-out duration-300 px-4 space-y-6 flex flex-col items-center justify-center`}>
        {navMenu.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              onClick={() => setIsMenuOpen(false)}
              className='hover:text-[#ffe040]'>
              {item.label}
            </Link>
          </li>
        ))}

        <div className='w-full flex justify-between items-center mt-10'>
          <div className='relative'>
            <Link
              to={"/cart"}
              onClick={() => {
                setIsMenuOpen(false);
              }}>
              <BsBasket2 className='text-4xl md:text-3xl cursor-pointer text-[#efe9e9e4]' />
              <span className='absolute w-7 text-center top-[-55%] right-[1%] bg-[#ffe040] rounded-full text-[#4b2f37]'>
                0
              </span>
            </Link>
          </div>
          <CgProfile
            onClick={() => {
              setShowLogin(true);
              setIsMenuOpen(false);
            }}
            className='text-4xl md:text-3xl cursor-pointer text-[#efe9e9e4]'
          />
        </div>
      </ul>
    </>
  );
};

export default NavItem;

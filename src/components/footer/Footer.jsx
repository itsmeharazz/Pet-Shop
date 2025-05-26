import React from 'react'
import Logo from "../../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
const Footer = () => {
      const location = useLocation();
    const navMenu = [
      { to: "/", label: "Home" },
      { to: "/shop", label: "Shop" },
      { to: "/about", label: "About" },
      { to: "/blog", label: "Blog" },
      { to: "/contact", label: "Contact" },
    ];
  return (
    <div className='bg-[#4b2f37] text-[#ffe040] py-25'>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-20 mx-auto'>
          <div className='link'>
            <h2 className='text-3xl font-bold mb-10'>Quick Link</h2>
            <ul className='block text-lg'>
              {navMenu.map((item) => (
                <li key={item.to} className='mb-3'>
                  <Link
                    to={item.to}
                    className={`text-[#efeeee] hover:text-[#ffe040]${
                      location.pathname === item.to
                        ? "text-amber-200 border-b-2 border-[#ffe040]"
                        : ""
                    }`}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='socal '>
            <img src={Logo} alt='' />
            <p className='my-10 text-white'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas et
              dignissimos qui quod ad fugiat error incidunt aliquid. Dolore, et?
            </p>
            <div className='flex gap-5 text-3xl  mt-10 text-[#fff] '>
              <Link to={"https://www.facebook.com/"}>
                <FaFacebookF className='hover:text-[#ffe040]' />
              </Link>
              <Link to={"https://www.instagram.com/"}>
                <FaInstagram className='hover:text-[#ffe040]' />
              </Link>
              <Link to={"https://www.youtube.com/"}>
                <FaYoutube className='hover:text-[#ffe040]' />
              </Link>
            </div>
          </div>
          <div className='subscribe '>
            <h2 className='text-3xl font-bold mb-10'>Subscribe</h2>
            <div className='relative mb-10'>
              <input
                type='email'
                className='w-full h-[50px] relative px-5 border border-[#fff] rounded-4xl '
              />
              <FaLocationArrow className='absolute top-[20%] right-[3%] text-3xl' />
            </div>
            <Link
              to={"https://mail.google.com/mail/u/0/#inbox?compose=new"}
              className='flex items-center gap-5 mb-5'>
              <MdOutlineEmail className='text-3xl' />
              <p className='text-xl text-white font-medium'>abc@gmail.com</p>
            </Link>
              <Link
                to={"tel:+8801234567892"}
                className='flex items-center gap-5 mb-5'>
                <IoCallSharp className='text-3xl' />
                <p className='text-xl text-white font-medium'>+8801234567892</p>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
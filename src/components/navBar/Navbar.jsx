import React from "react";
import { useState, useEffect } from "react";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import NavIcon from "./NavIcon";
import { MdHome } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoMdCart } from "react-icons/io";
const Navbar = ({ setShowLogin }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);
  return (
    <>
      {/* Desktop navbar */}
      <div className='bg-[#4b2f37] text-[#ffe040]'>
        <div className='container flex justify-between items-center py-7 border-b border-[#f9e0ca] '>
          <Link to={"/"}>
            <img src={logo} alt='Logo' className='w-[70%] aspect-auto' />
          </Link>
          <NavItem setShowLogin={setShowLogin} />
          <NavIcon setShowLogin={setShowLogin} />
        </div>
      </div>

      {/* Mobile foot bar */}
      <div className='lg:hidden fixed bottom-0 left-0 w-full bg-[#5a5858] border-t border-[#f9e0ca] z-10'>
        <div className='container flex justify-around items-center py-3'>
          <Link to={"/"} className='text-2xl'>
            <MdHome className='text-white border rounded-full p-3 text-5xl hover:bg-[#ffe404] hover:text-[#4b2f37]' />
          </Link>
          <Link to={"/cart"} className='text-2xl'>
            <IoMdCart className='text-white border rounded-full p-3 text-5xl hover:bg-[#ffe404] hover:text-[#4b2f37]' />
          </Link>
          <div className=''>
            {user ? (
              <Link to={""}>
                <img
                  src={user.picture}
                  alt={user.given_name}
                  className='w-[35px] h-[35px] rounded-full '
                />
              </Link>
            ) : (
              <CgProfile
                onClick={() => setShowLogin(true)}
                className='text-white border rounded-full p-3 text-5xl hover:bg-[#ffe404] hover:text-[#4b2f37]'
              />
            )}
            {/* <CgProfile
                      onClick={() => setShowLogin(true)}
                      className='text-4xl md:text-3xl cursor-pointer text-[#efe9e9e4]'
                    /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import React from 'react'
import { CgProfile } from "react-icons/cg";
import { BsBasket2 } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
const NavIcon = ({ setShowLogin }) => {
  return (
    <>
    {/* Desktop  */}
      <div className='hidden lg:flex justify-between items-center gap-5 '>
        <div className='relative'>
          <input
            type='search'
            className='w-[20em] h-[2em] text-[#4b2f37] px-4 bg-white rounded-full border-none outline-[#ffe040] px-3. placeholder:Search  overflow-hidden '
          />
          <FaSearch className='absolute right-3 top-1 text-xl text-[#4b2f37]' />
        </div>
        <div className='relative'>
          <Link to={"/cart"}>
            <BsBasket2 className='text-4xl md:text-3xl cursor-pointer text-[#efe9e9e4]' />
            <span className='absolute w-7 text-center top-[-55%] right-[1%] bg-[#ffe040] rounded-full text-[#4b2f37]'>
              0
              {/* {Product.lath} */}
            </span>
          </Link>
        </div>
        <CgProfile
          onClick={() => setShowLogin(true)}
          className='text-4xl md:text-3xl cursor-pointer text-[#efe9e9e4]'
        />

      </div>
      {/* Mobile */}
      
    </>
  );
};

export default NavIcon
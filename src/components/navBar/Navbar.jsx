import React from 'react'
import NavItem from './NavItem';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import NavIcon from './NavIcon';
const Navbar = ({setShowLogin }) => {
  return (
    <div className='bg-[#4b2f37] text-[#ffe040]'>
      <div className='container flex justify-between items-center py-7 border-b border-[#f9e0ca] '>
        <Link to={"/"}>
          <img src={logo} alt='Logo' className='w-[70%] aspect-auto' />
        </Link>
        <NavItem setShowLogin={setShowLogin} />
        <NavIcon setShowLogin={setShowLogin} />
      </div>
    </div>
  );
};

export default Navbar
import React from "react";
import { useState, useEffect } from "react";
import NavItem from "./NavItem";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import NavIcon from "./NavIcon";
import { MdHome } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoMdCart } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { googleLogout } from "@react-oauth/google";
const Navbar = ({ setShowLogin }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
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
          <Link to={"/"}>
            <MdHome className='text-white border rounded-full p-3 text-5xl hover:bg-[#ffe404] hover:text-[#4b2f37]' />
          </Link>
          <Link to={"/cart"}>
            <IoMdCart className='text-white border rounded-full p-3 text-5xl hover:bg-[#ffe404] hover:text-[#4b2f37]' />
          </Link>
          <div className=''>
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  {" "}
                  <img
                    src={user.picture}
                    alt={user.given_name}
                    className='w-[55px] h-[55px] rounded-full '
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent className={"bg-white"}>
                  <DropdownMenuLabel className={"text-xl font-semibold"}>
                    User Info
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <p className='text-xl'>Mr. {user.name}</p>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to={""}>
                      <p className='text-xl'>Dashboard</p>
                    </Link>
                  </DropdownMenuItem>
                  <button
                    onClick={() => {
                      googleLogout();
                      localStorage.clear();
                      navigate("/");
                      window.location.reload();
                    }}
                    className='w-full h-[40px] bg-[#4b2e37] text-center  text-white rounded-md  cursor-pointer font-bold'>
                    Logout
                  </button>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <CgProfile
                onClick={() => setShowLogin(true)}
                className='text-white border rounded-full p-3 text-5xl hover:bg-[#ffe404] hover:text-[#4b2f37]'
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

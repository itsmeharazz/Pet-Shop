import React, { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { BsBasket2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { googleLogout } from "@react-oauth/google";

const NavIcon = ({ setShowLogin }) => {
  const [user, setUser] = useState(null);
  // const navigate = useNavigate();
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
    // window.location.reload();
  }, []);

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
              0{/* {Product.lath} */}
            </span>
          </Link>
        </div>

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
                    // navigate("/");
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
              className='text-4xl md:text-3xl cursor-pointer text-[#efe9e9e4]'
            />
          )}
          {/* <CgProfile
            onClick={() => setShowLogin(true)}
            className='text-4xl md:text-3xl cursor-pointer text-[#efe9e9e4]'
          /> */}
        </div>
      </div>
      {/* Mobile */}
    </>
  );
};

export default NavIcon;

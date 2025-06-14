import React, { useEffect } from "react";
import { useStateContext } from "../../context/admin/ContextProvider";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import avatar from "../../Data/avatar.jpg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Cart, Chat } from ".";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position='bottomCenter'>
    <button
      type='button'
      onClick={customFunc}
      style={{ color }}
      className='relative text-xl rounded-full p-3 cursor-pointer'>
      <span
        style={{ background: dotColor }}
        className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
      />
      {icon}
    </button>
  </TooltipComponent>
);

const NavBar = () => {
  const {
    setActiveMenu,
    isClicked,
    handleClick,
    screenSize,
    setScreenSize,
  } = useStateContext();
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className='flex justify-between p-2 md:mx-6 pt-5 relative'>
      <NavButton
        title='Menu'
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color='blue'
        icon={<AiOutlineMenu />}
      />

      <div className='flex'>
        <NavButton
          title='Cart'
          customFunc={() => handleClick("cart")}
          color='blue'
          icon={<FiShoppingCart />}
        />
        <NavButton
          title='Chat'
          customFunc={() => handleClick("chat")}
          color='blue'
          icon={<BsChatLeft />}
          dotColor='#03C9D7'
        />
        <NavButton
          title='Notifications'
          customFunc={() => handleClick("notification")}
          color='blue'
          icon={<RiNotification3Line />}
          dotColor='#03C9D7'
        />

        <TooltipComponent content='Profile' position='BottomCenter'>
          <div
            className='flex items-center gap-2 cursor-pointer p-1 rounded-lg hover:bg-gray-300'
            onClick={() => handleClick("userProfile")}>
            <img src={avatar} alt='' className='rounded-full w-8 h-8' />
            <p className=''>
              <span className='text-gray-400 text-14'>Hi,</span>{" "}
              <span className='text-gray-400 font-bold ml-1 text-14'>Jhon</span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14' />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.cart && <Cart />}
        {isClicked.cart && <Cart />}
      </div>
    </div>
  );
};

export default NavBar;

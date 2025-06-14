import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../../Data/dummy";
import { useStateContext } from "../../context/admin/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white bg-blue-500 text-md m-2";

  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-black text-md m-2 text-gray-700 hover:bg-gray-300";

  return (
    <div className='pl-3 h-screen bg-gray-100 md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (
        <>
          <div className='flex justify-between items-center'>
            <Link
              to='/admin'
              onClick={() => {
                handleCloseSidebar;
              }}
              className='items-center gap-3 ml-3 mt-4 flex text-xl font-bold tracking-tight text-slate-900'>
              <SiShopware />
              <span>React</span>
            </Link>
            <TooltipComponent content='Menu' position='bottomCenter'>
              <button
                type='button'
                onClick={() => {
                  setActiveMenu((prevActiveMenu) => !prevActiveMenu);
                }}
                className='text-xl rounded-full hover:bg-gray-300 mt-5 block md:hidden'>
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className='mt-10'>
            {links.map((item) => (
              <div key={item.title} className=''>
                <p className='text-gray-400 m-3 mt-4 uppercase'>
                  {" "}
                  {item.title}{" "}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={() => {}}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }>
                    {link.icon}{" "}
                    <span className='capitalize'> {link.name} </span>{" "}
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;

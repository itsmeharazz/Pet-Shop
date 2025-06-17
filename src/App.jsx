import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

// User imports
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import ProductDetail from "./Pages/ProductDetail";
import BlogDetail from "./Pages/BlogDetail";
import Cart from "./Pages/Cart";
import PlaceOrder from "./Pages/PlaceOrder";
import Navbar from "./components/navBar/Navbar";
import SignInPopUp from "./components/navBar/signinPopUp/SigninPopUp";
import AllBlog from "./Pages/AllBlog";
import Footer from "./components/footer/Footer";

// Admin imports
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";
import { registerLicense } from "@syncfusion/ej2-base";
import {
  Area,
  Bar,
  Calender,
  ColorMapping,
  ColorPicker,
  Customer,
  Ecommerce,
  Editor,
  Employee,
  Financial,
  Kanban,
  Line,
  Orders,
  Pie,
  Pyramid,
  Stacked,
} from "./Pages/admin/index";
import { Sidebar, ThemeSettings } from "./components/admin";
import NavBar from "./components/admin/Navbar";
import { useStateContext } from "./context/admin/ContextProvider";

// Register Syncfusion license
registerLicense(
  "ORg4AjUWIQA/Gnt2XFhhQlJHfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hTH5WdENiXXtadH1TRmheWkZ/"
);

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const { activeMenu } = useStateContext();
  const location = useLocation();
  registerLicense(
    "ORg4AjUWIQA/Gnt2XFhhQlJHfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hTH5WdENiXXtadH1TRmheWkZ/"
  );
  const isAdminRoute = location.pathname.startsWith("/admin") || location.pathname.startsWith("/ecommerce")|| location.pathname.startsWith("/orders") || location.pathname.startsWith("/employees") || location.pathname.startsWith("/customers") || location.pathname.startsWith("/kanban") || location.pathname.startsWith("/editor") || location.pathname.startsWith("/calendar") || location.pathname.startsWith("/color-picker") || location.pathname.startsWith("/line") || location.pathname.startsWith("/area") || location.pathname.startsWith("/bar") || location.pathname.startsWith("/pie") || location.pathname.startsWith("/financial") || location.pathname.startsWith("/color-mapping") || location.pathname.startsWith("/pyramid") || location.pathname.startsWith("/stacked");

  return (
    <>
      {/* Show user layout only if not in admin route */}
      {!isAdminRoute && showLogin && (
        <SignInPopUp setShowLogin={setShowLogin} />
      )}
      {!isAdminRoute && <Navbar setShowLogin={setShowLogin} />}

      <Routes>
        {/* User Routes */}
        {!isAdminRoute && (
          <>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/singleProduct/:id' element={<ProductDetail />} />
            <Route path='/blog' element={<AllBlog />} />
            <Route path='/singleBlog/:id' element={<BlogDetail />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/order' element={<PlaceOrder />} />
          </>
        )}

        {/* Admin Route Wrapper */}
        <Route
          path='/*'
          element={
            <div className='flex relative bg-[--main-dark-bg]'>
              <div className='fixed right-4 bottom-4'>
                <TooltipComponent content='Settings' position='Top'>
                  <button
                    className='text-3xl p-3 hover:drop-shadow-xl hover:bg-gray-300 text-white cursor-pointer'
                    type='button'
                    style={{ background: "blue", borderRadius: "50%" }}>
                    <FiSettings />
                  </button>
                </TooltipComponent>
              </div>

              {activeMenu ? (
                <div className='w-72 fixed bg-white shadow-lg p-4'>
                  <Sidebar />
                </div>
              ) : (
                <div className='w-0 hidden'>Sidebar</div>
              )}

              <div
                className={`bg-white min-h-screen w-full ${
                  activeMenu ? "md:ml-72" : "flex-2"
                }`}>
                <div className='fixed md:static bg-white w-full text-black p-2 shadow'>
                  <NavBar />
                </div>

                <Routes>
                  <Route path='/admin' element={<Ecommerce />} />
                  <Route path='/ecommerce' element={<Ecommerce />} />
                  <Route path='/orders' element={<Orders />} />
                  <Route path='/employees' element={<Employee />} />
                  <Route path='/customers' element={<Customer />} />
                  <Route path='/kanban' element={<Kanban />} />
                  <Route path='/editor' element={<Editor />} />
                  <Route path='/calendar' element={<Calender />} />
                  <Route path='/color-picker' element={<ColorPicker />} />
                  <Route path='/line' element={<Line />} />
                  <Route path='/area' element={<Area />} />
                  <Route path='/bar' element={<Bar />} />
                  <Route path='/pie' element={<Pie />} />
                  <Route path='/financial' element={<Financial />} />
                  <Route path='/color-mapping' element={<ColorMapping />} />
                  <Route path='/pyramid' element={<Pyramid />} />
                  <Route path='/stacked' element={<Stacked />} />
                </Routes>
              </div>
            </div>
          }
        />
      </Routes>

      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;

import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
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
function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <SignInPopUp setShowLogin={setShowLogin} /> : <></>}
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/singleProduct/:id' element={<ProductDetail />} />
        <Route path='/blog' element={<AllBlog />} />
        <Route path='/singleBlog/:id' element={<BlogDetail />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

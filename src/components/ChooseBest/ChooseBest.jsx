import React, { useState, useEffect } from "react";
import Button from "../Button";
import { Link, useNavigate } from "react-router-dom";
import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const ChooseBest = () => {
  const navigate = useNavigate();
  const [allProduct, setAllProduct] = useState([]);
  const URL = "https://petshopapi-5jfx.onrender.com/products";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const allProduct = await response.json();
        setAllProduct(allProduct);
        // console.log(allProduct);
      } catch (error) {
        console.error("Error fetching Product:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className='chooseBestBg'>
      <div className='container pt-25 '>
        <div className='flex flex-col lg:flex-row items-center gap-20 py-20 justify-between'>
          {/* Text  */}
          <div className='left w-full lg:w-[50%]'>
            <h2 className='text-[#ffe040] text-4xl md:text-6xl font-semibold leading-tight mb-10'>
              Choose best food
            </h2>
            <p className='mb-10 text-amber-50 '>
              Whether you’re looking to relax or rejuvenate, our serums and oils
              know the way. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit, sed do eiusmod tempor
            </p>
            <Button
              onClick={() => navigate("/shop")}
              text='SHOP NOW'
              className='border-2 border-[#ffe040] text-[#ffe040] hover:border-none hover:bg-[#fff] hover:text-[#4b2f37]'
            />
          </div>
          {/* Show Products */}
          <div className='right w-full h-full  lg:w-[35%] lg:h-[700px] rounded-4xl overflow-x-auto'>
            <div className='itemCard w-[100%]  flex justify-between items-center gap-5'>
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay]}
                className='mySwiper'>
                {allProduct.map((product, index) => (
                  <SwiperSlide
                    key={index}
                    className='w-full h-full rounded-2xl p-7 bg-yellow-50 flex-shrink-0'>
                    <Link to={`/singleProduct/${product.id}`} className="text-gray-600 hover:text-black">
                      <img
                        src={product.image}
                        alt={product.name}
                        className='shadow-md rounded-3xl w-full h-[85%] aspect-square mb-5 text-center font-extrabold text-2xl object-cover'
                      />
                      <p className='mb-3 text-xl font-bold hover:text-amber-200'>
                        {product.name}
                      </p>
                      <p className='mb-3 font-medium'>{product.price}</p>
                      <p className='mb-3 font-medium'>
                        {product.shortDescription &&
                        product.shortDescription.length > 25
                          ? `${product.shortDescription.slice(0, 25)}...`
                          : product.shortDescription}
                      </p>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                // modules={[Autoplay]}
                loop={true}
                className='mySwiper w-full h-full flex rounded-4xl p-7 bg-yellow-50 flex-shrink-0'>
                {allProduct.map((product, index) => (
                  <SwiperSlide key={index}>
                    <Link to={`/singleProduct/${product.id}/${product.name}`} >
                      <img
                        src={product.image}
                        alt={product.name}
                        className='shadow-md rounded-3xl w-full h-[85%] aspect-square mb-5 text-center font-extrabold text-2xl'
                      />
                      <p className='mb-3 text-xl font-bold'>{product.name}</p>
                      <p className='mb-3 font-medium'>{product.price}</p>
                      <p className='mb-3 font-medium'>
                        {product.shortDescription &&
                        product.shortDescription.length > 15
                          ? `${product.shortDescription.slice(0, 15)}....`
                          : product.shortDescription}
                      </p>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseBest;

import React from "react";
import Button from "../Button";
import cover from "../../assets/cover banner.png";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Hero section */}
      <div className='w-full h-[110dvh] bg-[#4b2f37] py-5'>
        <div className='container block lg:flex justify-between items-center md:mt-[5vh]'>
          <div className='heroText mb-10 lg:mb-0'>
            <h1 className='text-[50px] md:text-[150px] md:leading-[140px] textFont font-[600] text-[#ffe040] mb-10 md:mb-20'>
              Food for every pet
            </h1>
            <p className='text-3xl textFont text-[#fff] mb-15 hidden md:block'>
              100% organic pet food
            </p>

            <Button
              onClick={() => navigate("/shop")}
              text='SHOP NOW'
              className='border-2 border-[#ffe040] text-[#ffe040] hover:border-none hover:bg-[#fff] hover:text-[#4b2f37]'
            />
          </div>
          <div className='w-full h-full md:w-[90%] md:mx-auto mt-0 md:mt-20 lg:mt-0 relative '>
            <img src={cover} alt='' className='round w-[90%] h-[90%] ' />
            <div className='hidden w-[150px] h-[150px] absolute top-[15%] left-[-3%] rounded-full text-3xl text-center bg-[#ffe040] md:grid place-items-center'>
              Best Product
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

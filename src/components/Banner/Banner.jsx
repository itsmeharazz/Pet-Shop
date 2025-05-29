import React, { useEffect, useState } from "react";

const Banner = () => {
  const [foodBanner, setFoodBanner] = useState([]);
  const URL = "http://localhost:3000/foodBanner";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setFoodBanner(data);
      } catch (error) {
        console.error("Error fetching banner data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='w-full bg-[#faeee9] pt-1'>
      <div className='container mt-25'>
        <div className='grid grid-cols-1 md:grid-cols-2 grid-rows-1  gap-5 p-4 h-[600px]'>
          {foodBanner.length >= 4 && (
            <>
              {/* Left large image */}
              <img
                src={foodBanner[0].img}
                alt='Banner 1'
                className='row-span-3  w-full h-full object-cover rounded-lg'
              />

              {/* Top-right image */}
              <img
                src={foodBanner[1].img}
                alt='Banner 2'
                className='w-full h-full row-span-2 object-cover rounded-lg'
              />

              {/* Bottom-right two images in a nested grid */}
              <div className='grid grid-cols-3 grid-rows-1 gap-4 overflow-hidden'>
                <img
                  src={foodBanner[2].img}
                  alt='Banner 3'
                  className='w-full h-[100%] object-cover rounded-lg'
                />
                <img
                  src={foodBanner[3].img}
                  alt='Banner 4'
                  className='w-full h-full object-cover rounded-lg'
                />
                <img
                  src={foodBanner[4].img}
                  alt='Banner 4'
                  className='w-full h-full object-cover rounded-lg'
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;

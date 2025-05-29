import React, { useEffect, useState } from "react";
import Timer from "../timer/Timer";
import { Link } from "react-router-dom";
const SpecialProducts = () => {
  const [bestDeals, setBestDeals] = useState([]);
  const URL = "http://localhost:3000/specialProducts";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setBestDeals(data);
      } catch (error) {
        console.error("Error fetching banner data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className='w-full bg-[#faeee9] pb-25'>
      <div className='container pt-1'>
        <h2 className='text-[#4b2f37] text-4xl md:text-6xl font-semibold leading-tight mb-25'>
          Best Deals of The Week
        </h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 grid-rows-1  gap-8 '>
          {bestDeals.length >= 5 && (
            <>
              {/* Icon Banner */}
              <div className='flex flex-col row-span-3  overflow-hidden bg-[#fefce8] h-[95%] shadow-lg cursor-pointer rounded-xl  '>
                <Link
                  to={`/singleProduct/${bestDeals[0].id}`}
                  key={bestDeals[0].id}>
                  <div className='w-full overflow-hidden relative '>
                    <img
                      src={bestDeals[0].img}
                      alt=''
                      className='w-full aspect-[1/1] pb-5 object-cover rounded-lg'
                    />
                    <p className='absolute top-0 left-0 bg-[#4b2f37] py-5 px-10  text-2xl font-bold text-[#ffe040] rounded-br-3xl  '>
                      {bestDeals[0].discount}%
                    </p>
                  </div>
                  <div className='px-5'>
                    <h2 className='text-2xl font-medium mb-5'>
                      {bestDeals[0].name}
                    </h2>
                    <div className='flex gap-5 mb-5'>
                      <p className=' text-red-400 line-through text-xl font-semibold'>
                        ${bestDeals[0].originalPrice}
                      </p>
                      <p className='text-[#4b2f37] text-xl font-semibold'>
                        ${bestDeals[0].finalPrice}
                      </p>
                    </div>
                    <div className='w-full mb-5'>
                      <Timer duration={4 * 24 * 60 * 60 * 1000} />
                    </div>
                    <p className='mb-5'>{bestDeals[0].description}</p>
                  </div>
                </Link>
              </div>
              {/* Products top right */}
              <div className='grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4 overflow-hidden pb-5 '>
                <div className='flex flex-col overflow-hidden bg-[#fefce8] shadow-lg  cursor-pointer rounded-xl '>
                  <Link
                    to={`/singleProduct/${bestDeals[1].id}`}
                    key={bestDeals[1].id}>
                    <div className='w-full overflow-hidden relative'>
                      <img
                        src={bestDeals[1].img}
                        alt=''
                        className='w-full h-full pb-5 object-cover rounded-lg'
                      />
                      <p className='absolute top-0 left-0 bg-[#4b2f37] py-2 px-5  text-xl font-bold text-[#ffe040] rounded-br-3xl  '>
                        {bestDeals[1].discount}%
                      </p>
                    </div>
                    <div className='px-5'>
                      <h2 className='text-2xl font-medium mb-5'>
                        {bestDeals[1].name}
                      </h2>
                      <div className='flex gap-10 '>
                        <p className=' text-red-400 line-through text-xl font-semibold'>
                          ${bestDeals[1].originalPrice}
                        </p>
                        <p className='text-[#4b2f37] text-xl font-semibold'>
                          ${bestDeals[1].finalPrice}
                        </p>
                      </div>
                      <p className='my-5'>{bestDeals[1].description}</p>
                    </div>
                  </Link>
                </div>
                {/* Products-2 */}
                <div className='flex flex-col overflow-hidden bg-[#fefce8] shadow-lg  cursor-pointer rounded-xl '>
                  <Link
                    to={`/singleProduct/${bestDeals[2].id}`}
                    key={bestDeals[2].id}>
                    <div className='w-full  overflow-hidden relative'>
                      <img
                        src={bestDeals[2].img}
                        alt=''
                        className='w-full h-full pb-5 object-cover rounded-lg'
                      />
                      <p className='absolute top-0 left-0 bg-[#4b2f37] py-2 px-5  text-xl font-bold text-[#ffe040] rounded-br-3xl  '>
                        {bestDeals[2].discount}%
                      </p>
                    </div>
                    <div className='px-5'>
                      <h2 className='text-2xl font-medium mb-5'>
                        {bestDeals[2].name}
                      </h2>
                      <div className='flex gap-10 '>
                        <p className=' text-red-400 line-through text-xl font-semibold'>
                          ${bestDeals[2].originalPrice}
                        </p>
                        <p className='text-[#4b2f37] text-xl font-semibold'>
                          ${bestDeals[2].finalPrice}
                        </p>
                      </div>
                      <p className='my-5'>{bestDeals[2].description}</p>
                    </div>
                  </Link>
                </div>
              </div>
              {/* Products button right */}
              <div className='grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4 overflow-hidden pb-5 '>
                <div className='flex flex-col overflow-hidden bg-[#fefce8] shadow-lg  cursor-pointer rounded-xl '>
                  <Link
                    to={`/singleProduct/${bestDeals[3].id}`}
                    key={bestDeals[3].id}>
                    <div className='w-full overflow-hidden relative'>
                      <img
                        src={bestDeals[3].img}
                        alt=''
                        className='w-full h-full pb-5 object-cover rounded-lg'
                      />
                      <p className='absolute top-0 left-0 bg-[#4b2f37] py-2 px-5  text-xl font-bold text-[#ffe040] rounded-br-3xl  '>
                        {bestDeals[3].discount}%
                      </p>
                    </div>
                    <div className='px-5'>
                      <h2 className='text-2xl font-medium mb-5'>
                        {bestDeals[3].name}
                      </h2>
                      <div className='flex gap-10 '>
                        <p className=' text-red-400 line-through text-xl font-semibold'>
                          ${bestDeals[3].originalPrice}
                        </p>
                        <p className='text-[#4b2f37] text-xl font-semibold'>
                          ${bestDeals[3].finalPrice}
                        </p>
                      </div>
                      <p className='my-5'>{bestDeals[3].description}</p>
                    </div>
                  </Link>
                </div>
                {/* products-2 */}
                <div className='flex flex-col overflow-hidden bg-[#fefce8] shadow-lg  cursor-pointer rounded-xl '>
                  <Link
                    to={`/singleProduct/${bestDeals[4].id}`}
                    key={bestDeals[4].id}>
                    <div className='w-full  overflow-hidden relative'>
                      <img
                        src={bestDeals[4].img}
                        alt=''
                        className='w-full h-full pb-5 object-cover rounded-lg'
                      />
                      <p className='absolute top-0 left-0 bg-[#4b2f37] py-2 px-5  text-xl font-bold text-[#ffe040] rounded-br-3xl  '>
                        {bestDeals[4].discount}%
                      </p>
                    </div>
                    <div className='px-5'>
                      <h2 className='text-2xl font-medium mb-5'>
                        {bestDeals[4].name}
                      </h2>
                      <div className='flex gap-10 '>
                        <p className=' text-red-400 line-through text-xl font-semibold'>
                          ${bestDeals[4].originalPrice}
                        </p>
                        <p className='text-[#4b2f37] text-xl font-semibold'>
                          ${bestDeals[4].finalPrice}
                        </p>
                      </div>
                      <p className='my-5'>{bestDeals[4].description}</p>
                    </div>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpecialProducts;

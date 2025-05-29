import  {useEffect, useState } from "react";
import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { TbDiscount } from "react-icons/tb";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
const Policy = () => {
  const [policy, setPolicy] = useState([]);
  const URL = "http://localhost:3000/policy";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setPolicy(data);
      } catch (error) {
        console.error("Error fetching banner data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className='w-full bg-[#faeee9] pt-25'>
      <div className='container pt-1'>
        <div className='grid grid-cols-1 lg:grid-cols-2 grid-rows-1  gap-8 '>
          {policy.length >= 5 && (
            <>
              {/* Icon Video */}
              <div className='flex flex-col row-span-3 overflow-hidden bg-[#fefce8] h-[95%] shadow-lg rounded-xl pt-10 p-5  '>
                <div className='px-5'>
                  <h2 className='text-3xl font-medium mb-5'>
                    {policy[0].headline}
                  </h2>
                  <h2 className='text-md font-normal mb-5'>
                    {policy[0].paragraph}
                  </h2>
                  <video
                    controls='controls'
                    // autoPlay='autoplay'
                    className='w-full h-full '>
                    <source src={policy[0].video} type='video/mp4' />
                  </video>
                </div>
              </div>
              {/* Products top right */}
              <div className='grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4 overflow-hidden pb-5 '>
                <div className='flex flex-col overflow-hidden bg-[#fefce8] shadow-lg  rounded-xl '>
                  <p className='text-6xl font-extrabold px-5 pt-10'>
                    <BiSolidPhoneCall />
                  </p>
                  <div className='p-5'>
                    <h2 className='text-2xl font-medium mb-5'>
                      {policy[1].headline}
                    </h2>

                    <p className='my-5'>{policy[1].paragraph}</p>
                  </div>
                </div>
                {/* Products-2 */}
                <div className='flex flex-col overflow-hidden bg-[#fefce8] shadow-lg  rounded-xl '>
                  <p className='text-6xl font-extrabold px-5 pt-10'>↺</p>
                  <div className='p-5'>
                    <h2 className='text-2xl font-medium mb-5'>
                      {policy[2].headline}
                    </h2>

                    <p className='my-5'>{policy[2].paragraph}</p>
                  </div>
                </div>
              </div>
              {/* Products button right */}
              <div className='grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4 overflow-hidden pb-5 '>
                <div className='flex flex-col overflow-hidden bg-[#fefce8] shadow-lg  rounded-xl '>
                  <p className='text-6xl font-extrabold px-5 pt-10'>
                    <TbRosetteDiscountCheckFilled />
                  </p>
                  <div className='p-5'>
                    <h2 className='text-2xl font-medium mb-5'>
                      {policy[3].headline}
                    </h2>

                    <p className='my-5'>{policy[3].paragraph}</p>
                  </div>
                </div>
                {/* products-2 */}
                <div className='flex flex-col overflow-hidden bg-[#fefce8] shadow-lg  rounded-xl '>
                  <p className='text-6xl font-extrabold px-5 pt-10'>
                    <TbDiscount />
                  </p>
                  <div className='p-5'>
                    <h2 className='text-2xl font-medium mb-5'>
                      {policy[4].headline}
                    </h2>

                    <p className='my-5'>{policy[4].paragraph}</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Policy;

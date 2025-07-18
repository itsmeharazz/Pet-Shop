import React from "react";
import welcomeBg from "../../Data/welcome-bg.svg";
import { Button, SparkLine, Stacked } from "../../components/admin";
import { earningData, SparklineAreaData } from "../../Data/dummy";
import { GoDotFill } from "react-icons/go";

const Ecommerce = () => {
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div
          className='bg-white h-44 rounded-xl sm:w-[50%] md:w-full lg:w-80 p-8 pt-9 m-3 bg-no-repeat bg-cover bg-center'
          style={{ backgroundImage: `url(${welcomeBg})` }}>
          <div className='flex justify-between items-center'>
            <div className=''>
              <p className='font-bold text-gray-400'>Earnings</p>
              <p className='text-2xl'> $63,448.78 </p>
            </div>
          </div>
          <div className='mt-6'>
            <Button
              color='white'
              bgColor='blue'
              borderRadius='10px'
              size='md'
              text='Download'
            />
          </div>
        </div>
        <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
          {earningData.map((item) => (
            <div
              key={item.title}
              className='bg-white h-44 md:w-45 lg:w-40 p-4 pt-9 rounded-2xl'>
              <button
                type='button'
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className='text-2xl opacity-90 rounded-full p-4 hover:drop-shadow-xl'>
                {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'> {item.amount} </span>
                <span className={`text-sm text-${item.pcColor}`}>
                  {" "}
                  {item.percentage}{" "}
                </span>
              </p>
              <p className='text-sm text-gray-400 mt-1'> {item.title} </p>
            </div>
          ))}
        </div>
      </div>
      {/* Revenue section */}
      <div className='flex gap-10 flex-wrap justify-center'>
        <div className='bg-white m-3 rounded-2xl md:w-[780px]'>
          <div className='flex justify-between'>
            <div className='font-semibold text-xl'>Revenue Updates</div>
            <div className='flex items-center gap-4'>
              <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                <span className=''>
                  {" "}
                  <GoDotFill />{" "}
                </span>
                <span className=''>Expense</span>
              </p>
              <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                <span className=''>
                  {" "}
                  <GoDotFill />{" "}
                </span>
                <span className=''>Budget</span>
              </p>
            </div>
          </div>
          <div className='mt-10 flex gap-10 flex-wrap justify-center'>
            <div className='border-r-1 border-color m-4 pr-10'>
              <div className=''>
                <p className=''>
                  <span className='text-3xl font-semibold'>$93,438</span>
                  <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>
                    23%
                  </span>
                </p>
                <p className='text-gray-500 mt-1'> Budget </p>
              </div>
              <div className='mt-8'>
                <p className=''>
                  <span className='text-3xl font-semibold'>$93,438</span>
                </p>
                <p className='text-gray-500 mt-1'>Expense</p>
              </div>
              <div className='mt-5'>
                <SparkLine
                  currentColor='blue'
                  id='line-sparkline'
                  type='Line'
                  height='80px'
                  width='250px'
                  data={SparklineAreaData}
                  color='blue'
                />
              </div>
              <div className='mt-5'>
                <Button
                  color='white'
                  bgColor='blue'
                  text='Download Report'
                  borderRadius='10px'
                />
              </div>
            </div>
            <div className=''>
              <Stacked width='320px' height='360px' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;

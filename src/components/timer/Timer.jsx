import React, { useEffect, useState } from "react";

const Timer = ({ duration }) => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (time > 0) setTime(time - 1000);
    }, 1000);

    return () => clearTimeout(timer);
  }, [time]);

  const getFormattedTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = getFormattedTime(time);

  return (
    <div className='w-full grid grid-cols-4 gap-1  md:gap-8 '>
      <p className='text-center py-2 px-2 font-light md:font-bold border-[#4b2f37] text-[#4b2f37] text-md md:text-3xl border rounded-xl grid place-items-center   '>
        {days} <br />
        <span className='text-sm  md:text-xl'>Days</span>
      </p>
      <p className='text-center py-2 px-2 font-light md:font-bold border-[#4b2f37] text-[#4b2f37] text-md md:text-3xl border rounded-xl grid place-items-center   '>
        {hours} <br />
        <span className='text-sm  md:text-xl'>hours</span>
      </p>
      <p className='text-center py-2 px-2 font-light md:font-bold border-[#4b2f37] text-[#4b2f37] text-md md:text-3xl border rounded-xl grid place-items-center   '>
        {minutes} <br />
        <span className='text-sm  md:text-xl'>minutes</span>
      </p>
      <p className='text-center py-2 px-2 font-light md:font-bold border-[#4b2f37] text-[#4b2f37] text-md md:text-3xl border rounded-xl grid place-items-center   '>
        {seconds} <br />
        <span className='text-sm  md:text-xl'>seconds</span>
      </p>
    </div>
  );
};

export default Timer;

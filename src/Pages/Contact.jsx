import React from "react";
import Button from "@/components/Button";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 my-25 gap-30'>
          <div className='w-full '>
            <h2 className='text-4xl font-bold mb-5'>Get in touch</h2>
            <p className=' mb-5'>
              Your e-mail will not be published. Required Fields are Make*
            </p>
            <from>
              <div className='block md:flex justify-between'>
                <div className='block mb-4'>
                  <label htmlFor='' className='mb-5 text-2xl font-semibold'>
                    {" "}
                    Your Name*
                  </label>
                  <input
                    type='text'
                    className='w-full mt-5 border p-3 rounded-lg focus:outline outline-amber-300'
                  />
                </div>
                <div className='block mb-4'>
                  <label htmlFor='' className='mb-5 text-2xl font-semibold'>
                    {" "}
                    Email*
                  </label>
                  <input
                    type='email'
                    className='w-full mt-5 border p-3 rounded-lg focus:outline outline-amber-300'
                  />
                </div>
              </div>
              <div className='block'>
                <label htmlFor='' className='mb-5 text-2xl font-semibold'>
                  Subject *
                </label>
                <input
                  type='text'
                  className='w-full border mt-5 p-3 rounded-lg focus:outline outline-amber-300'
                />
              </div>
              <div className='block my-10'>
                <label htmlFor='' className='mb-5 text-2xl font-semibold'>
                  Your Message *
                </label>
                <textarea
                  name=''
                  id=''
                  className='w-full border mt-5 h-50 p-3 rounded-lg focus:outline outline-amber-300'></textarea>
              </div>
              <Button
                text='Send'
                type='submit'
                className='border-2 border-[#ffe040] bg-[#4b2f37] text-[#ffe040]  hover:bg-[#fff] hover:text-[#4b2f37] mb-10'
              />
            </from>
          </div>
          <div className='w-full border bg-gray-100 p-10'>
            <div className='block mb-15'>
              <h2 className='text-4xl font-bold mb-5'>Address</h2>
              <p className='mb-5'>4517 Dhaka,Bangladesh</p>
            </div>
            <div className='block mb-15'>
              <h2 className='text-4xl font-bold mb-5'>Contact</h2>
              <p className='mb-5'>Phone: +8801234-5678901</p>
              <p className='mb-5'>Email: abc@gmail.com</p>
            </div>
            <div className='block mb-15'>
              <h2 className='text-4xl font-bold mb-5'>Open time</h2>
              <p className='mb-5'>Saturday thursday : 10:00 - 20:00</p>
            </div>
            <div className='block mb-15'>
              <h2 className='text-4xl font-bold mb-10'>Stay connected</h2>
              <div className='flex gap-10 mb-5'>
                <Link to={"https://www.facebook.com/"}>
                  <FaFacebookF className='bg-amber-900 text-amber-300 p-4 text-6xl rounded-full' />
                </Link>
                <Link to={"https://www.instagram.com/"}>
                  <FaInstagram className='bg-amber-900 text-amber-300 p-4 text-6xl rounded-full' />
                </Link>
                <Link to={"https://www.youtube.com/"}>
                  <FaYoutube className='bg-amber-900 text-amber-300 p-4 text-6xl rounded-full' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

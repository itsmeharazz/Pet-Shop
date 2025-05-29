import React from 'react'
import Person from "../../assets/avatar.jpg";
import { FaRegStar } from "react-icons/fa";
import Button from "@/components/Button";
const ProductReviews = ({ details }) => {
  return (
    <div>
      {" "}
      {details.reviews.map((review) => (
        <>
          <div className='w-full flex justify-between items-center mb-10' key={review}>
            <div className='flex items-center w-[50%] md:w-[35%]'>
              <img
                src={Person}
                alt=''
                className='rounded-full w-[70px] h-[70px] mr-5'
              />
              <div className='flex flex-col'>
                <p className='font-bold'>{review.username}</p>
                <span className='text-gray-400'>(Verified)</span>
              </div>
            </div>
            <p>Date: {review.date}</p>
          </div>
          <p>{review.comment}</p>
          <p className='mt-5'>⭐⭐⭐⭐⭐ {review.rating} Review</p>
          <hr className='my-5 font-bold' />
        </>
      ))}
      <from className='flex flex-col'>
        <label htmlFor='' className='text-2xl font-bold mb-5'>
          Add Review *
        </label>
        <textarea
          name=''
          id=''
          className='border h-[200px] mb-10 p-3'></textarea>
        <div className='flex gap-2 text-3xl text-yellow-500 mb-5 '>
          <FaRegStar className='cursor-pointer' />
          <FaRegStar className='cursor-pointer' />
          <FaRegStar className='cursor-pointer' />
          <FaRegStar className='cursor-pointer' />
          <FaRegStar className='cursor-pointer' />
        </div>
        <Button
          text='Send'
          type='submit'
          className='border-2 border-[#ffe040] bg-[#4b2f37] text-[#ffe040]  hover:bg-[#fff] hover:text-[#4b2f37] mb-10'
        />
      </from>
    </div>
  );
};

export default ProductReviews
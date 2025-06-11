import React, { useState } from "react";
import Person from "../../assets/avatar.jpg";
import { MdOutlineStar } from "react-icons/md";
import Button from "@/components/Button";
import { Bold, Italic, Underline } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const ProductReviews = ({ details }) => {
  const [selectedStyles, setSelectedStyles] = useState([]);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const getTextStyle = () => {
    return selectedStyles
      .map((style) => {
        switch (style) {
          case "bold":
            return "font-bold";
          case "italic":
            return "italic";
          case "underline":
            return "underline";
          default:
            return "";
        }
      })
      .join(" ");
  };

  return (
    <div>
      {/* Existing Reviews */}
      {details.reviews.map((review, index) => (
        <div key={`${review.username}-${review.date}-${index}`}>
          <div className='w-full flex justify-between items-center mb-10'>
            <div className='flex items-center w-[50%] md:w-[35%]'>
              <img
                src={Person}
                alt='User'
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
        </div>
      ))}

      {/* Add Review */}
      <form className='flex flex-col'>
        <label className='text-2xl font-bold mb-5'>Add Review *</label>

        {/* Toggle Text Styles */}
        <ToggleGroup
          type='multiple'
          size='lg'
          value={selectedStyles}
          onValueChange={setSelectedStyles}
          className='mb-4'>
          <ToggleGroupItem value='bold' aria-label='Toggle bold'>
            <Bold className='h-4 w-4' />
          </ToggleGroupItem>
          <ToggleGroupItem value='italic' aria-label='Toggle italic'>
            <Italic className='h-4 w-4' />
          </ToggleGroupItem>
          <ToggleGroupItem value='underline' aria-label='Toggle underline'>
            <Underline className='h-4 w-4' />
          </ToggleGroupItem>
        </ToggleGroup>

        {/* Comment Box */}
        <textarea
          className={`border h-[200px] mb-10 p-3 ${getTextStyle()}`}
          placeholder='Write your review here...'
          value={comment}
          onChange={(e) => setComment(e.target.value)}></textarea>

        {/* Star Rating */}
        <div className='flex gap-2 text-3xl text-yellow-500 mb-5'>
          {[1, 2, 3, 4, 5].map((star) => (
            <MdOutlineStar
              key={star}
              className={`cursor-pointer ${
                star <= rating ? "text-yellow-500" : "text-gray-300"
              }`}
              onClick={() => setRating(star)}
            />
          ))}
        </div>

        {/* Submit Button */}
        <Button
          text='Send'
          type='submit'
          className='border-2 border-[#ffe040] bg-[#4b2f37] text-[#ffe040] hover:bg-[#fff] hover:text-[#4b2f37] mb-10'
        />
      </form>
    </div>
  );
};

export default ProductReviews;

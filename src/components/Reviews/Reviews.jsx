import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const URL = "https://petshopapi-5jfx.onrender.com/Reviews";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const reviews = await response.json();
        setReviews(reviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='w-full pb-24'>
      <div className='container pt-10'>
        <div className='mb-16 '>
          <h2 className='text-[#4b2f37] text-4xl md:text-6xl font-semibold leading-tight'>
            Customer Reviews
          </h2>
          <p className='mt-5 text-gray-600 max-w-xl'>
            See what our happy customers have to say about their experience with
            us.
          </p>
        </div>

        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          className='py-5'
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}>
          {reviews.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className='w-full rounded-xl p-5 shadow-md bg-[#faeee9] flex-shrink-0 '>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className='w-[100px] h-[100px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px] object-cover rounded-full mb-4 mx-auto border-2 border-yellow-400'
              />
              <p className='mb-2 text-xl font-bold'>{testimonial.name}</p>
              <p className='mb-3 text-gray-700 text-sm md:text-base'>
                {testimonial.paragraph}
              </p>
              <p className='text-yellow-600 font-semibold'>
                ⭐ Reviews: {testimonial.reviews}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;

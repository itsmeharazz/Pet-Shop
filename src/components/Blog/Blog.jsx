import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    const [blog, setBlog]= useState([]);
    const URL = "https://petshopapi-5jfx.onrender.com/blog";

    useEffect(() =>{
        const fetchBlog = async()=>{
            try {
                const response = await fetch(URL);
                const blog = await response.json();
                setBlog(blog);
              } catch (error) {
                console.error("Error fetching Blog:", error);
              }
            };
            fetchBlog();
        }, []);
       
  return (
    <div className='w-full bg-[#faeee9] py-25'>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center '>
          {blog.slice(0, 3).map((allBlog, index) => (
            <div
              className='w-full rounded-xl px-8 pt-5 shadow-md bg-[#fff] flex-shrink-0 mx-auto hover:shadow-lg hover:scale-104 transition-transform'
              key={index}>
              <Link to={`/singleBlog/${allBlog.id}`}>
                <div className='relative'>
                  <img
                    src={allBlog.image}
                    alt={allBlog.title}
                    className='w-full h-full  lg:h-[400px] aspect-square mb-5  rounded-md '
                  />
                  <p className='bg-[#ffe04d] text-[#4b2f37] text-md font-bold p-3 absolute -bottom-0 right-0'>
                    <span> Date: {allBlog.date}</span>
                  </p>
                </div>
                <h2 className='text-xl textFont font-bold mb-5'>
                  {allBlog.title}
                </h2>
                  <h2 className='text-xl font-bold mb-5 text-gray-500'>
                    <span className='font:bold'>Author: {allBlog.author}</span>
                  </h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams(); // Getting the dynamic id from URL

  const URL = "https://petshopapi-5jfx.onrender.com/blog";

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const singleBlog = blogs.find((item) => item.id.toString() === id);

  if (loading) {
    return (
      <p className='text-center mt-12 text-2xl text-blue-500 font-medium'>
        Loading...
      </p>
    );
  }

  if (!singleBlog) {
    return (
      <p className='text-center mt-12 text-4xl font-extrabold text-red-500'>
        Blog not found
      </p>
    );
  }

  return (
    <>
      <div className='bg-[#4b2f37] w-full h-[50dvh] lg:h-[70dvh]'></div>
      <div className='container'>
        <div className='head textFont mt-[-250px] md:mt-[-450px] lg:mt-[-600px]'>
          <h1 className='text-2xl lg:text-5xl font-bold my-10 text-[#ffe04d]'>
            {singleBlog.title}
          </h1>
          <img
            src={singleBlog.image}
            alt={singleBlog.title}
            className='w-full h-auto rounded-md mb-6'
          />
        </div>
        <div className='px-4 py-10'>
          <div className='flex items-center justify-between text-gray-600 mb-6'>
            <span className='text-md font-medium'>
              <span className='font-bold'>Author: </span> {singleBlog.author}
            </span>
            <span className='text-md'>
              <span className='font-bold'> Date: </span>
              {singleBlog.date}
            </span>
          </div>
          <hr />
          <p className='text-lg mt-5 text-gray-800 leading-relaxed whitespace-pre-line'>
            {singleBlog.content}
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;

import React, { useEffect, useState } from "react";
import CategorySelection from "./LatestCategory";
import LatestCard from "./LatestCard";

const LatestProducts = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        let url = "https://petshopapi-5jfx.onrender.com/latest";
        if (selectedCategory) {
          url += `?category=${encodeURIComponent(selectedCategory)}`;
        }

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    if (category === selectedCategory) {
      setSelectedCategory(null);
      setActiveCategory(null);
    } else {
      setSelectedCategory(category);
      setActiveCategory(category);
    }
    setLoading(true); // Show loading on new category click
  };

  if (loading) {
    return (
      <div className='flex justify-center items-center py-20'>
        <div className='animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#4b2f37]'></div>
      </div>
    );
  }

  if (error) {
    return <div className='text-red-500 text-center py-6'>Error: {error}</div>;
  }

  return (
    <div className='w-full  bg-[#FAEEE9] pb-25'>
      <div className='w-full pt-25'>
        <div className='text-center w-[90%] md:w-[50%] mx-auto relative mb-25'>
          <span className='absolute top-[-20%] right-[-3%] text-3xl font-extrabold'>
            ╮╮
          </span>
          <p className='text-2xl md:text-4xl'>
            We believe in nurturing growth at every stage, Caring for your pets,
            One groom at a time. No fillers, artificial flavors, or by-products
          </p>
          <span className='absolute button-0 left-0 text-3xl font-extrabold'>
            ╰╰
          </span>
        </div>
      </div>
      <div className='container '>
        <div className='block lg:flex justify-between items-center gap-10 mb-25'>
          <h2 className='text-[#4b2f37] text-4xl md:text-6xl font-semibold leading-tight'>
            Our Latest Products
          </h2>
          <CategorySelection
            onSelectCategory={handleCategoryChange}
            activeCategory={activeCategory}
          />
        </div>

        <div>
          <LatestCard
            products={products}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
      </div>
    </div>
  );
};

export default LatestProducts;

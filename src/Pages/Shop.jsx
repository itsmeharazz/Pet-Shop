import React, { useState, useEffect } from "react";
import AllCategory from "../components/allProducts/AllCategory";
import ProductsCard from "../components/allProducts/ProductCard";
import Pagination from "../components/allProducts/Pagenatiion";
import Brands from "../components/allProducts/Brands";
import ShowCategory from "../components/allProducts/MobileButton/ShowCategory";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [activeBrand, setActiveBrand] = useState(null);

  useEffect(() => {
    async function fetchproducts() {
      let url = `http://localhost:3000/products?_page=${currentPage}&_limit=${pageSize}`;

      if (selectedCategory) {
        url += `category=${selectedCategory}`;
      }
      if (selectedBrand) {
        url += `&brand=${selectedBrand}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    }
    fetchproducts();
  }, [currentPage, pageSize, selectedCategory, selectedBrand]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  };
  const handleBrandChange = (brandName) => {
    setSelectedBrand(brandName);
    setSelectedCategory(null); // clear category if you want
    setCurrentPage(1);
    setActiveBrand(brandName);
    setActiveCategory(null);
  };

  return (
    <div>
      <div className='container mt-15 lg:mt-25 px-12 block lg:flex justify-between items-start gap-10'>
        {/* Sid bar */}
        <div className=' w-[23%] hidden lg:block'>
          {/* Display Category */}
          <div className='w-full h-[400px] shadow-md rounded-xl border border-[#d9d9d9]  mb-10 py-5 px-4'>
            <h2 className='text-2xl font-extrabold text-[#383636] mb-2'>
              Category
            </h2>
            <div className='overflow-auto h-[330px]'>
              <AllCategory
                onSelectCategory={handleCategoryChange}
                selectedCategory={selectedCategory}
                activeCategory={activeCategory}
              />
            </div>
          </div>
          {/* Display Brand */}
          <div className='w-full h-[400px] shadow-md rounded-xl border border-[#d9d9d9]  mb-10 py-5 px-4'>
            <h2 className='text-2xl font-bold text-[#383636] mb-2'>Brands</h2>
            <div className='overflow-auto h-[330px]'>
              <Brands
                onSelectBrand={handleBrandChange}
                activeBrand={activeBrand}
              />
            </div>
          </div>
        </div>
        <div className='mobileSidBar'>
          <ShowCategory />
        </div>
        {/* Display Products  */}
        <div className='w-full'>
          <ProductsCard
            products={products}
            currentPage={currentPage}
            selectedCategory={selectedCategory}
            pageSize={pageSize}
          />
        </div>
      </div>

      {/* Display Pagination */}
      <div className='my-10 '>
        <Pagination
          onPageChange={handlePageChange}
          products={products}
          currentPage={currentPage}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
};

export default Shop;

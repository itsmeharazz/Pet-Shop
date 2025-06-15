import React, { useState, useEffect } from "react";
import ProductsCard from "../components/allProducts/ProductCard";
import Pagination from "../components/allProducts/Pagination";
import AllCategory from "@/components/allProducts/AllCategory";
import Brands from "../components/allProducts/Brands";

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
      let url =
        "http://localhost:3000/products?page=${currentPage}&limit=${pageSize}";
      if (selectedCategory) {
        url += `&category=${selectedCategory}`;
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
  const handleBrandsChange = (brand) => {
    setSelectedBrand(brand);
    setActiveBrand(brand);
    setCurrentPage(1);
  };

  return (
    <div>
      <div className='container mt-25 px-12 flex justify-between items-start gap-10'>
        {/* Sid bar */}
        <div className='md:hidden lg:block w-[23%]'>
          {/* Display Category */}
          <div className='w-full h-[430px] shadow-md rounded-xl border border-[#d9d9d9] mb-10 py-5 px-4'>
            <h2 className='text-2xl font-extrabold text-[#383636] mb-2'>
              Category
            </h2>
            <div className='overflow-y-auto h-[350px] '>
              <AllCategory
                onSelectCategory={handleCategoryChange}
                selectedCategory={selectedCategory}
                activeCategory={activeCategory}
              />
            </div>
          </div>
          {/* Display Brand */}
          <div className='w-full h-[430px] shadow-md rounded-xl border border-[#d9d9d9] mb-10 py-5 px-4'>
            <h2 className='text-2xl font-bold text-[#383636] mb-2'>Brands</h2>
            <div className='overflow-y-auto h-[350px]  '>
              <Brands
                onSelectBrand={handleBrandsChange}
                activeBrand={activeBrand}
              />
            </div>
          </div>
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

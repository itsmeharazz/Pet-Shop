import React, { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const ShowCategory = ({
  onSelectCategory,
  activeCategory,
  onSelectBrand,
  activeBrand,
}) => {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isBrandOpen, setIsBrandOpen] = useState(false);

  useEffect(() => {
    fetch("https://petshopapi-5jfx.onrender.com/products")
      .then((res) => {
        if (!res.ok) throw new Error("Fetch error");
        return res.json();
      })
      .then((data) => {
        const allCategories = [...new Set(data.map((item) => item.category))];
        const allBrands = [...new Set(data.map((item) => item.brand))];

        setCategories(allCategories);
        setBrands(allBrands);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleCategorySelect = (category) => {
    onSelectCategory(category);
    setIsCategoryOpen(false);
  };

  const handleBrandSelect = (brand) => {
    onSelectBrand(brand);
    setIsBrandOpen(false);
  };

  if (loading)
    return (
      <div>
        <span className='loader'></span>
      </div>
    );
  if (error) return <div>{error}</div>;

  return (
    <div className='lg:hidden flex justify-between items-center w-full '>
      {/* Category Dropdown */}
      <div className='relative'>
        <button
          onClick={() => {
            setIsCategoryOpen(!isCategoryOpen);
            setIsBrandOpen(false);
          }}
          className='px-4 py-2 bg-[#e7e5e5] text-gray-600 rounded-md shadow-md w-full sm:w-fit flex items-center'>
          {activeCategory || "Category"}
          <IoMdArrowDropdown className='text-3xl font-semibold' />
        </button>

        {isCategoryOpen && (
          <div className='absolute mt-2 bg-white border rounded-md shadow-lg z-20 w-full sm:w-56'>
            <button
              onClick={() => handleCategorySelect(null)}
              className={`block w-full text-left px-4 py-2 ${
                !activeCategory
                  ? "text-orange-500 font-bold"
                  : "text-gray-600 hover:text-orange-400"
              }`}>
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategorySelect(cat)}
                className={`block w-full text-left px-4 py-2 ${
                  activeCategory === cat
                    ? "text-orange-500 font-bold"
                    : "text-gray-600 hover:text-orange-400"
                }`}>
                {cat || "Uncategorized"}
              </button>
            ))}
          </div>
        )}
      </div>
        <p className="text-xl font-bold">OR</p>
      {/* Brand Dropdown */}
      <div className='relative'>
        <button
          onClick={() => {
            setIsBrandOpen(!isBrandOpen);
            setIsCategoryOpen(false);
          }}
          className='px-4 py-2 bg-[#e7e5e5] text-gray-600 rounded-md shadow-md w-full sm:w-fit flex items-center '>
          {activeBrand || "Brand"}
          <IoMdArrowDropdown className='text-3xl font-semibold' />
        </button>

        {isBrandOpen && (
          <div className='absolute mt-2 bg-white border rounded-md shadow-lg z-20 w-full sm:w-56'>
            <button
              onClick={() => handleBrandSelect(null)}
              className={`block w-full text-left px-4 py-2 ${
                !activeBrand
                  ? "text-orange-500 font-bold"
                  : "text-gray-600 hover:text-orange-400"
              }`}>
              All
            </button>
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => handleBrandSelect(brand)}
                className={`block w-full text-left px-4 py-2 ${
                  activeBrand === brand
                    ? "text-orange-500 font-bold"
                    : "text-gray-600 hover:text-orange-400"
                }`}>
                {brand}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowCategory;

import React, { useEffect, useState } from "react";

const CategorySelection = ({ onSelectCategory, activeCategory }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch(
          "https://petshopapi-5jfx.onrender.com/latest"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Expected an array but received different data.");
        }

        const uniqueCategories = [
          ...new Set(data.map((product) => product.category)),
        ];
        setCategories(uniqueCategories);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className='flex justify-center items-center py-10'>
        <div className='animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#4b2f37]'></div>
      </div>
    );
  }

  if (error) {
    return <div className='text-red-500 text-center py-6'>Error: {error}</div>;
  }

  if (categories.length === 0) {
    return (
      <div className='text-gray-500 text-center py-6'>No categories found.</div>
    );
  }

  return (
    <div className='mt-10 lg:mt-0 flex gap-4 justify-center md:justify-start'>
      {categories.map((category) => (
        <button
          key={category || "uncategorized"}
          onClick={() => onSelectCategory(category)}
          className={`py-2 px-6 rounded-full border transition-all duration-300
            ${
              activeCategory === category
                ? "bg-[#4b2f37] text-white border-[#4b2f37] scale-105"
                : "text-[#4b2f37] border-[#4b2f37] hover:bg-[#4b2f37] hover:text-white"
            }`}>
          {category || "Uncategorized"}
        </button>
      ))}
    </div>
  );
};

export default CategorySelection;

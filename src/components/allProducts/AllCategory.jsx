import React, { useEffect, useState } from "react";

const AllCategory = ({ onSelectCategory, activeCategory }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("API Response:", data); // Debugging log
        if (!Array.isArray(data)) {
          throw new Error("Expected array but got different data structure");
        }

        const allCategories = data.map((product) => product.category);
        const uniqueCategories = [...new Set(allCategories)];
        console.log("Extracted Categories:", uniqueCategories); // Debugging log

        setCategories(uniqueCategories);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading categories...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (categories.length === 0) {
    return <div>No categories found</div>;
  }

  return (
    <div className='h-full flex flex-col text-2xl items-start font-sm mb-10'>
      <button
        onClick={() => onSelectCategory(null)}
        className={`mb-2 p-2 ${
          !activeCategory
            ? "active-button text-orange-500 text-xl font-black"
            : "text-gray-400"
        }`}>
        All
      </button>

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`mb-2 p-2 text-left  w-full cursor-pointer ${
            activeCategory === category
              ? "active-button text-orange-500 text-xl font-black"
              : "text-gray-400 hover:text-orange-400"
          }`}>
          {category || "Uncategorized"}
        </button>
      ))}
    </div>
  );
};

export default AllCategory;

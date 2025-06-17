import React, { useEffect, useState } from "react";

const AllCategory = ({ onSelectCategory, activeCategory }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://petshopapi-5jfx.onrender.com/products")
      .then((response) => {
        if (!response.ok) throw new Error("HTTP error");
        return response.json();
      })
      .then((data) => {
        const allCategories = data.map((product) => product.category);
        const uniqueCategories = [...new Set(allCategories)];
        setCategories(uniqueCategories);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div>
      <span class='loader'></span>
    </div>
  );
  if (error) return <div>{error}</div>;
  if (categories.length === 0) return <div>No categories found</div>;

  return (
    <div className='flex flex-col text-2xl items-start font-sm mb-10'>
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
          className={`mb-2 p-2 text-left w-full cursor-pointer ${
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

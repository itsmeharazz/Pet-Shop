import React, { useEffect, useState } from "react";

const Brands = ({ onSelectBrand, activeBrand }) => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => {
        if (!response.ok) throw new Error("HTTP error");
        return response.json();
      })
      .then((data) => {
        const allBrands = data.map((product) => product.brand);
        const uniqueBrands = [...new Set(allBrands.filter(Boolean))];
        setBrands(uniqueBrands);
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
  if (brands.length === 0) return <div>No brands found</div>;

  return (
    <div className='h-full flex flex-col text-2xl items-start font-sm mb-10'>
      <button
        onClick={() => onSelectBrand(null)}
        className={`mb-2 p-2 cursor-pointer ${
          !activeBrand
            ? "active-button text-orange-500 text-xl font-black"
            : "text-gray-400"
        }`}>
        All
      </button>

      {brands.map((brand) => (
        <button
          key={brand}
          onClick={() => onSelectBrand(brand)}
          className={`mb-2 p-2 text-left w-full cursor-pointer ${
            activeBrand === brand
              ? "active-button text-orange-300 text-xl font-black"
              : "text-gray-400 hover:text-orange-400"
          }`}>
          {brand || "Uncategorized"}
        </button>
      ))}
    </div>
  );
};

export default Brands;

import React, { useEffect, useState } from "react";

const BrandSelection = ({ onSelectBrand, activeBrand }) => {
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
        console.log("Fetched products:", data); // Debug log
        const allBrand = data.map((product) => product.brand);
        console.log("All brands:", allBrand); // Debug log

        const uniqueBrands = [...new Set(allBrand.filter(Boolean))];
        setBrands(uniqueBrands);
        setLoading(false); // Make sure loading is set to false
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading Brands...</div>;
  if (error) return <div>{error}</div>;
  if (brands.length === 0) return <div>No brands found</div>;

  return (
    <div className='h-full flex flex-col text-2xl items-start font-sm mb-10'>
      <button
        onClick={() => onSelectBrand(null)}
        className={`mb-2 p-2 ${
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

export default BrandSelection;

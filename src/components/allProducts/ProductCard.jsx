import React from "react";
import { Link } from "react-router-dom";

const ProductsCard = ({
  products,
  currentPage,
  selectedCategory,
  pageSize,
  selectedBrand,
}) => {
  const filteredProducts = products
    .filter((product) => {
      const categoryMatch =
        !selectedCategory || product.category === selectedCategory;
      const brandMatch = !selectedBrand || product.brandName === selectedBrand;
      return categoryMatch && brandMatch;
    })
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
      {filteredProducts.map((product) => (
        <Link
          to={`/singleProduct/${product.id}`}
          key={product.id}
          className='p-5 shadow-lg rounded-md w-full mx-auto hover:scale-105 transition-transform cursor-pointer'>
          <div className='img'>
            <img
              src={product.image}
              className='w-full h-full aspect-square hover:scale-105 transition-transform'
              alt={product.name}
            />
          </div>
          <h3 className='mt-4 mb-2 font-bold text-xl text-gray-600 hover:text-gray-800 cursor-pointer'>
            {product.name}
          </h3>
          <h3 className='mt-4 mb-2 text-xl font-medium text-gray-600 '>
            $ {product.price}
          </h3>
          <h3 className='mt-4 mb-2 font-normal text-gray-600 '>
            {product.shortDescription?.length > 50
              ? `${product.shortDescription.slice(0, 50)}...`
              : product.shortDescription}
          </h3>
        </Link>
      ))}
    </div>
  );
};

export default ProductsCard;

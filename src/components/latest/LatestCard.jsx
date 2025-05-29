import React from "react";
import { Link } from "react-router-dom";

const ProductsCard = ({
  products,
  selectedCategory,
}) => {
  const filteredProducts = products
    .filter((product) => {
      const categoryMatch =
        !selectedCategory || product.category === selectedCategory;
      return categoryMatch;
    })

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 overflow-hidden'>
      {filteredProducts.slice(0, 6).map((product) => (
        <Link
          to={`/singleProduct/${product.id}`}
          key={product.id}
          className='shadow-lg  cursor-pointer rounded-xl overflow-hidden bg-yellow-50 mb-5 hover:scale-105 transition-transform'>
          <div className='img '>
            <img src={product.image} className='w-full' alt={product.name} />
          </div>
          <h3 className='my-5 pl-5 mb-2 font-bold text-xl hover:text-blue-600 cursor-pointer'>
            {product.name}
          </h3>
          <h3 className='mb-5 pl-5 text-xl font-medium cursor-pointer'>
            $ {product.price}
          </h3>
        </Link>
      ))}
    </div>
  );
};

export default ProductsCard;

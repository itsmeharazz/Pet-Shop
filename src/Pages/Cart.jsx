import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import Button from "@/components/Button";

const Cart = () => {
  const navigate = useNavigate();
  const { products, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  return (
    <div className='container'>
      <div className='mt-[100px]'>
        <div className='grid grid-cols-6 items-center text-gray-500 font-semibold mb-4'>
          <p>Image</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {products.map((item) =>
          cartItems[item.id] > 0 ? (
            <div key={item.id}>
              <div className='grid grid-cols-6 items-center py-5'>
                <img
                  src={item.image}
                  alt={item.name}
                  className='w-[8em] h-[8em] object-cover'
                />
                <p>{item.name}</p>
                <p>${item.price.toFixed(2)}</p>
                <p>{cartItems[item.id]}</p>
                <p>${(item.price * cartItems[item.id]).toFixed(2)}</p>
                <button onClick={() => removeFromCart(item.id)}>
                  <RiDeleteBin6Line className='text-2xl text-red-400 hover:text-red-600 cursor-pointer' />
                </button>
              </div>
              <hr className='h-[1px] bg-[#e2e2e2] border-none' />
            </div>
          ) : null
        )}
      </div>

      <div className='my-[80px] block md:flex justify-around gap-8'>
        <div className='w-full md:w-[50%] flex flex-col gap-6'>
          <h2 className='text-xl font-bold mb-4'>Cart Total</h2>
          <div className='space-y-6 text-[#555]'>
            <div className='flex justify-between'>
              <p>Sub Total</p>
              <p>${getTotalCartAmount().toFixed(2)}</p>
            </div>
            <div className='flex justify-between'>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? "0.00" : "2.00"}</p>
            </div>
            <div className='flex justify-between font-semibold'>
              <p>Total</p>
              <p>
                $
                {getTotalCartAmount() === 0
                  ? "0.00"
                  : (getTotalCartAmount() + 2).toFixed(2)}
              </p>
            </div>
          </div>
          <Button
            onClick={() => navigate("/order")}
            text='  Proceed To Checkout'
            className='mt-6 border-2 border-[#ffe040] bg-[#4b2f37] text-[#ffe040]  hover:bg-[#fff] hover:text-[#4b2f37]'
          />
        </div>

        <div className='w-full md:w-[38%]'>
          <div className='my-5'>
            <p className='mb-2'>If you have a promo code, enter it here</p>
            <div className='flex flex-wrap items-center gap-2'>
              <input
                type='text'
                placeholder='Promo Code'
                className='pl-3 w-[60%] py-2 bg-[#f3eeee] rounded-l-xl outline-none'
              />

              <button className='w-[150px] py-2 px-4 rounded-r-xl text-[#ffe040] bg-[#4b2f37] hover:bg-[#ffe040] hover:text-[#4b2f37] transition-all cursor-pointer'>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

import React, { useEffect } from 'react'
import { createContext,useState } from 'react';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
const URL = "https://petshopapi-5jfx.onrender.com/products";
  const [products, setProducts] = useState([]);
 useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await fetch(URL);
         if (!response.ok) {
           throw new Error(`HTTP error! status: ${response.status}`);
         }
         const singleProduct = await response.json();
         setProducts(singleProduct);
       } catch (error) {
         console.error("Failed to fetch products:", error);
       }      
     };
     fetchData();
   }, []);
    const addToCart = (itemId) => {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: (prev[itemId] || 0) + 1,
      }));
     
    
    };
    const removeFromCart = (itemId) => {
      setCartItems((prev) => {
        if (!prev[itemId]) return prev; 

        const updatedCart = { ...prev };
        if (updatedCart[itemId] === 1) {
          delete updatedCart[itemId];
        } else {
          updatedCart[itemId] -= 1;
        }
        return updatedCart;
      });
    };
    const getTotalCartAmount = () => {
      return Object.entries(cartItems).reduce((total, [itemId, quantity]) => {
        const itemInfo = products.find(
          (product) => String(product.id) === String(itemId)
        );
        return itemInfo ? total + itemInfo.price * quantity : total;
      }, 0);
    };
    useEffect(() => {
      console.log(cartItems);
    }, [cartItems]);
    const contextValue = {
        products,
      cartItems,
      addToCart,
      removeFromCart,
      getTotalCartAmount,
    };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
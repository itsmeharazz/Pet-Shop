import React, { useEffect, useState, useContext } from "react";
import { StoreContext } from "@/context/StoreContext";
import { useParams, useNavigate } from "react-router-dom";
import Button from "@/components/Button";
import Person from "../assets/avatar.jpg";
import { FaRegStar } from "react-icons/fa";
import ProductReviews from "@/components/productReview/ProductReviews";
import { FormInputIcon } from "lucide-react";
import { FaPlus, FaWindowMinimize } from "react-icons/fa6";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";

const ProductDetail = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const { id } = useParams();
  const URL = "https://petshopapi-5jfx.onrender.com/products";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  //  const [reviews, setReviews ] = useState(null);
  //  const [activeReviews, setActiveReviews ] = useState(null);
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
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  

  // const handleReviewChange = (review) => {
  //   if (review === setReviews) {
  //     setReviews(null);
  //     setActiveReviews(null);
  //   } else {
  //     setReviews(review);
  //     setActiveReviews(review);
  //   }
  //   setLoading(true); // Show loading on new category click
  // };
  const details = products.find((item) => item.id.toString() === id);
  if (loading) {
    return <p className='text-center mt-12 text-3xl'>Loading...</p>;
  }

  if (!details) {
    return (
      <p className='text-center mt-12 text-6xl font-extrabold my-20 text-red-500'>
        Product not found
      </p>
    );
  }

  console.log(details);
  return (
    <div>
      <div className='container my-25'>
        {/*Single Product */}
        <div className='block lg:flex items-start gap-5 mb-25'>
          <img
            src={details.image}
            alt=''
            className='w-full md:w-[550px] aspect-square mb-10'
          />
          <div className='flex flex-col mx-auto'>
            <h1 className='text-3xl font-bold mb-10'>{details.name}</h1>
            <div className='flex gap-1.5 mb-8'>
              ⭐⭐⭐⭐⭐
              <span> 4.9 (250 Review)</span>
            </div>
            <p className='mb-8 text-xl font-bold'>$ {details.price}</p>
            <p className='mb-8'>{details.shortDescription}</p>
            <div className='flex gap-20 mb-15'>
              <p>
                <span className='font-bold'>Category : </span>
                {details.category}
              </p>
              <p>
                <span className='font-bold'>Brand : </span>
                {details.brand}
              </p>
            </div>
            <div className='block md:flex gap-10 mt-10'>
              {!cartItems[id] ? (
                // <div
                //   className='flex justify-around items-center rounded-2xl w-[35%] p-2 gap-2 mt-10 text-white bg-[#ff7016] hover:bg-[#43bb00] transition-all ease-in-out cursor-pointer'
                //   onClick={() => addToCart(id)}>
                //   <MdShoppingCartCheckout className='text-2xl' />
                //   <p>Add to Cart</p>
                // </div>
                <Button
                  onClick={() => {
                    const user = localStorage.getItem("user");
                    if (!user) {
                      setOpenDialog(true);
                      return;
                    }
                    addToCart(id);
                  }}
                  text='Add to cart'
                  className='border-2 border-[#ffe040] bg-[#4b2f37] text-[#ffe040] hover:bg-[#fff] hover:text-[#4b2f37]'
                />
              ) : (
                <>
                  <div className='w-[230px] h-[60px] mb-10 md:mb-0 rounded-full cursor-pointer font-bold transition-all duration-300 p-3 flex justify-between items-center border-2 border-[#ffe040]   '>
                    <FaWindowMinimize
                      className='mb-3 cursor-pointer'
                      onClick={() => removeFromCart(id)}
                    />
                    <p> {cartItems[id]} </p>
                    <FaPlus
                      className=' cursor-pointer'
                      onClick={() => addToCart(id)}
                    />
                  </div>
                  <Button
                    onClick={() => navigate("/order")}
                    text='By Now'
                    className='border-2 border-[#ffe040] bg-[#4b2f37] text-[#ffe040]  hover:bg-[#fff] hover:text-[#4b2f37]'
                  />
                </>
              )}
            </div>
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
              <DialogContent className={"bg-red-200"}>
                <DialogHeader>
                  <DialogDescription className={"text-2xl font-bold"}>
                    Please login to add items to your cart.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <p className='text-2xl font-bold mb-5'>Description</p>
        {/*Product Description*/}
        <p>
          {details.longDescription} <br /> <br /> Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Non praesentium eaque explicabo
          accusamus, iure quis cupiditate necessitatibus temporibus deleniti
          ullam ea saepe nemo beatae, voluptatum et quia magni natus
          consequatur! Quaerat eius asperiores, dicta quo cum, molestiae unde
          perferendis corporis vel in dolorum ullam. Tenetur culpa dolorum
          assumenda esse! Ullam deserunt magnam, eaque laboriosam cumque
          consequuntur asperiores incidunt expedita a, ducimus quia quasi
          blanditiis vitae adipisci repellendus facilis atque. Praesentium
          veritatis autem voluptas? In impedit cum alias aut voluptate fugit
          doloribus accusantium est sint recusandae. Quidem nam fugit iure
          similique optio accusamus voluptates obcaecati iste placeat est,
          accusantium recusandae, dignissimos delectus numquam eveniet modi
          sequi. A delectus animi debitis, libero voluptatibus tempore, ipsam
          quae aperiam eaque soluta adipisci modi consectetur porro, assumenda
          dignissimos temporibus deleniti repellendus error. Corporis culpa
          doloribus earum enim repellat dicta. Porro accusamus ipsum impedit
          deserunt quibusdam quis, velit nobis fugiat eius consectetur aut
          dignissimos quidem amet.
        </p>
        {/*Product Reviews*/}
        <div className=' flex flex-col '>
          <h2 className='text-2xl font-bold my-10'>Review List</h2>
          <ProductReviews details={details} />
        </div>
      </div>
      
    </div>
  );
};

export default ProductDetail;

import React from 'react'
import { MdOutlineClose } from 'react-icons/md'
import { HiOutlineArrowLeft} from 'react-icons/hi'

import { useDispatch, useSelector } from 'react-redux'
import {  decrementQuantity, deleteItem,  incrementQuantity,  resetCart } from '../redux/BazarSlice';
import { ToastContainer, toast } from 'react-toastify';
import {Link} from "react-router-dom"


const CartItem = (item) => {
  const dispatch = useDispatch();
    const productData = useSelector((state) => state.bazar.productData);


    



   
  return (
    <div className='w-2/3 pr-10'>
     
     <div className='w-full'>
      <h2 className='font-titleFont text-3xl '>Your Cart</h2>

     </div>

     <div>
      {
        productData.map((item) =>(
          <div
          key={item._id}
          className='flex item-center justify-between gap-6 mt-6'
              >
            <div className='flex items-center gap-4'>
              <MdOutlineClose onClick={()=>dispatch(deleteItem(item._id
              ))&
                toast.error(`${item.title} is removed from the Cart`)} 
                className='text-xl text-gray-700 hover:text-red-800 cursor-pointer duration-300'/>
              <img 
              className='w-32 h-32 object-cover'
              src={item.image}
               alt="productImg" /> 
            </div>
            <h2 className='w-52'>{item.title}</h2>
            <p className='w-10 font-bold'>${item.price}</p>
            <div className='w-52 h-10 flex items-center justify-between text-gray-500 gap-4 border  p-3'>
            <p className='text-sm'>Quantity</p>
            <div className='flex items-center gap-4 text-sm font-semibold'>
             <span 
               onClick={()=>dispatch(decrementQuantity({
                _id: item._id,
                title:item.title,
                image:item.image,
                price: item.price,
                quantity:1,
                description:item.description,  
      })
               )}
             className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>
             -
             </span>
             <span className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>
             {item.quantity}
             </span>
             <span
             onClick={()=>dispatch(incrementQuantity({
              _id: item._id,
              title:item.title,
              image:item.image,
              price: item.price,
              quantity:1,
              description:item.description,  
    })
             )}
             className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>
             +
             </span>

              </div>

            </div>
              <p className='w-14 font-extrabold'>${item.quantity * item.price}</p>
            </div>
      
          
        ) )
      }
     </div>

     <button  onClick={()=>dispatch(resetCart()) & toast.error("Your Cart is Empty!")} className='bg-red-500  text-white mt-8 ml-7 py-1 px-6 hover:bg-red-700 duration-300'>Reset Cart</button>

     <Link to="/">
       
       <button className='mt-8 ml-7 flex items-center gap-1 text-gray-700 hover:text-black-900 hover:font-bold duration-100'>
        <span>
          <HiOutlineArrowLeft/>

        </span>
        Back to Shopping
       </button>

     </Link>

     <ToastContainer
        
        position='top-left'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
      
    </div>
  );
}

export default CartItem

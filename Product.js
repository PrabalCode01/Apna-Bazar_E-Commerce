import React, { useEffect, useState } from 'react'
import { MdOutlineStar,MdOutlineStarHalf } from 'react-icons/md';
import {FaStarHalf} from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/BazarSlice';
import { ToastContainer, toast } from 'react-toastify';

const Product = () => {
    
  const dispatch = useDispatch();
    const [details,setDetails] = useState({});
    const [baseQuatity, setBaseQty] = useState(1);
 

    const Location = useLocation();
    useEffect(()=>{
       setDetails(Location.state.item)
    },[])


  return (
    <div>
        <div className='max-w-screen-xl mx-auto my-10 flex gap-10'>
          <div>
            <img 
            className='w-full h-[500px] object-cover'
            src={details.image} alt="productImg" />
          </div>
          
          <div className='w-3/5 flex flex-col justify-center gap-12'>

            <div>
                <h2 className='text-3xl font-semibold py-2'>{details.title}</h2>
                <div>
                <p className='text-2xl font-semibold '>${details.price}</p>
                </div>
            </div>

            <div className='flex items-center gap-2 text-base'>
               <div className='flex'>
               <MdOutlineStar/>
                <MdOutlineStar/>
                <MdOutlineStar/>
                <MdOutlineStar/>
                <FaStarHalf/>
               </div>
                <p className='text-xs text-gray-500'>(1,546 reviews)</p>
            </div>
               <p className='text-base text-gray-500 -mt-3'>{details.description}</p>
             
             <div className='flex justify-between'>
                <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3 '>
                    <p className='text-sm text-gray-700'>Quantity</p>
                     <div className='flex items-center gap-4 text-sm font-semibold'>
                     <button   onClick={()=>setBaseQty( (baseQuatity === 1) ? (baseQuatity + 0) : (baseQuatity-1))}  className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>-</button>
                    <span className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>{baseQuatity}</span>
                    <button onClick={()=>setBaseQty(baseQuatity+1)}  className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>+</button>
                     </div>
                </div>

                <div className='flex gap-1'>
                <button onClick={()=>dispatch(addToCart({
                    _id: details._id,
                    title:details.title,
                    image:details.image,
                    price: details.price,
                    quantity:baseQuatity,
                    description:details.description,  
                })
                ) & toast.success(`${details.title} is added in the cart`)
                } className='bg-black text-white py-3 px-6 hover:bg-gray-600 active:bg-gray-700'>
                  Add to Cart
                </button>
                <button className='bg-black text-white py-3 px-6  hover:bg-gray-600 active:bg-gray-700'>
                  Buy Now
                </button>
                </div>
             </div>
             <p className='text-base text-gray-500'>
                Category: {" "}
               <span className='font-medium capitalize'> {details.category}</span>
            </p>


      
          </div>
        </div>
        <ToastContainer
        
        position='top-left'
        autoClose={2000}
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
  )
}

export default Product

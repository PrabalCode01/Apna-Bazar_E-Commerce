import React from 'react'

import CartItem from '../components/CartItem'
import { ToastContainer, toast} from 'react-toastify';
import { useState, useEffect } from 'react'
import {  useSelector } from 'react-redux'
import StripeCheckout from "react-stripe-checkout"
import { payment } from '../assets';
import axios from "axios"



const Cart = () => {
  
  const productData = useSelector((state) => state.bazar.productData);
  const [totalAmt, setTotalAmt] = useState("");
  const userinfo =useSelector((state)=> state.bazar.userinfo);
  const [payNow , setpayNow] = useState(false);

useEffect(()=>{
  let price=0;
  productData.map((item)=>{
    price += item.price* item.quantity;
    return price;

  });
    setTotalAmt(price.toFixed(2))
},[productData])

  // console.log(productData)

  const handleCheckOut= ()=>{
     if(userinfo){
      setpayNow(true);
     }
     else{
      toast.error("Please sign in to checkout!")
     }
  }

  
  const payment = async(token)=>{
    await axios.post("http://localhost:8000/pay",{
      amount : totalAmt*100,
      token : token,
    })
  }


  return (
    <div>
      
      {/* image integrated in future */}
      {/* <img className='w-full h-60 object-cover' src="" alt="" /> */}
      <div className='max-w-screen-xl mx-auto  py-20 flex'>

        <CartItem />

        <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
          <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-500 pb-6'>
            <h2 className='text-3xl font-medium'>Cart Total</h2>
            <p className='flex items-center gap-4 text-base'>Subtotal{" "}
            <span className='font-titleFont font-bold text-lg'>${totalAmt}</span>
              </p>
            
              <p className='flex items-center gap-4 text-base'>Shipping{" "}
            <span className='font-titleFont font-bold text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, et amet! </span>
              </p>
          </div>

          <p className='font-titleFont text-base font-semibold flex justify-between mt-4'>
          Total <span className='text-xl font-bold'>${totalAmt}</span>
           
          </p>
              
          <button onClick={handleCheckOut} className='text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300'>
            Procede to Pay
          </button>
          {
            payNow && <div className='w-full mt-6 flex items-center justify-center'>
              <StripeCheckout
  name="Apna Bazar" 
  description={`Your Payment amount is $${totalAmt}`} // the pop-in header subtitle
 
  token={payment}
  panelLabel="Pay to bazar" 
  amount={totalAmt*100}
  stripeKey="pk_test_51NMQbwSBFGVv6VETae4GfMY6V9edUi1geA6h3qHv3H12oAwOhmUEsTUcfdIDgMrfpH3X86R5lM9ic6V4y2pRZpHn00TpHxElaK"
  email={userinfo.email}/>
            </div>

          }
        </div>
      </div>
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
  )
}

export default Cart

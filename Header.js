import React from 'react'
import {bazar,bag,cart} from "../assets/index"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Header = () => {
  
  const productnumber = useSelector((state) => state.bazar.productData);
  const userinfo =useSelector((state)=> state.bazar.userinfo);
  console.log(userinfo)
  return (
    <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50'>
      <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between '>
      <Link to="/">
      <div>
            <img className='w-28' src={bazar} alt="bazar" />
        </div>
      </Link>
      <div className='flex items-center gap-6'>
        <ul className='flex items-center gap-6'>
     <li className='text-base text-black font-bold hover:text-green-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Home</li>
     <li className='text-base text-black font-bold hover:text-green-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Pages</li>
      <li className='text-base text-black font-bold hover:text-green-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Shop</li>
      <li className='text-base text-black font-bold hover:text-green-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Element</li>
      <li className='text-base text-black font-bold hover:text-green-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Blog</li>
        </ul>
      <Link to='/cart'>
      <div className='relative cursor-pointer'>
            <img className='w-8 ' src={bag} alt="login" />
            <span className='absolute w-8 top-3 left-0 text-sm flex items-center justify-center font-semibold font-titleFont'> {productnumber.length}</span>
        </div>
      </Link>
       <Link to="/login">
       <img className='w-9 h-9 cursor-pointer' src={
        userinfo ? userinfo.image: cart
       } alt="cart" />
       </Link>
       {userinfo && <p className='text-base font-titlefont font-semibold underline underline-offset-2'>{userinfo.name}</p>}
      </div>
      </div> 
      
    </div>
  )
}

export default Header

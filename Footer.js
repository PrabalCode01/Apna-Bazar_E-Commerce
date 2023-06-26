import React from 'react'
import {ImGithub} from "react-icons/im";
import {FaFacebookF, FaInstagram, FaTwitter, FaYoutube,FaHome} from "react-icons/fa"
import {bazar} from "../assets/index"
import {MdLocationOn} from "react-icons/md"
import {BsPersonFill, BsPaypal} from "react-icons/bs";



const Footer = () => {
  return (
    <div className='bg-black py-20 text-[#949494] font-titleFont'>
      <div className='max-w-screen-xl mx-auto grid grid-cols-4'>

        <div className='flex flex-col gap-4'>
            <img className='w-32 cursor-pointer' src={bazar} alt="bazar" />
            <p className='text-xl  text-gray-500 hover:text-white duration-200 cursor-pointer '>@ apnabazar.com</p>
            <img className='w-56 cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEz4OUicExlA1SVFRQYJnTNs1xTTyHDLf9ow&usqp=CAU" alt="payment" />

            <div className=' w-56 flex flex-row gap-5 text-gray-500'>
                <ImGithub className='hover:text-white duration-300 cursor-pointer'/>
                <FaFacebookF className='hover:text-white duration-300 cursor-pointer'/>
                <FaInstagram className='hover:text-white duration-300 cursor-pointer'/>
                <FaTwitter className='hover:text-white duration-300 cursor-pointer'/>
                <FaYoutube className='hover:text-white duration-300 cursor-pointer'/>
               
            </div>
        </div>



        {/* //Locate Us */}

        <div>
        <h1 className='text-2xl font-semibold text-white mb-4'>
            Contact Us
        </h1>
        <div className='text-base flex flex-col gap-3'>
            <p>12,Sector-5 Indrapuri West,New Delhi</p>
            <p>Mobile: +91-9045756901</p>
            <p>Phone: 56478-6888988988</p>
            <p>E-mail: apnabazar@gmail.com</p>
        </div>
        </div>
        

        <div>
        <h1 className='text-2xl font-semibold text-white mb-4'>
            Profile
        </h1>
    <div className='text-base flex flex-col gap-3'>
    <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><BsPersonFill/></span>My account</p>
    <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><BsPaypal /></span>Checkout</p>
    <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><FaHome/></span>Order Tracking</p>
    <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><MdLocationOn/></span>help & support</p>
         </div>
            </div>


    {/* subscribe */}

    <div className='flex flex-col justify-center gap-2'>
        <input className='bg-transparent border px-5 py-3    text-sm ' placeholder='e-mail' type="text" />
        <button className=' text-sm border py-1  text-white  hover:bg-red-500 active:bg-white active:text-black'>Subscribe</button>
    </div>




      </div>
    </div>
  )
}

export default Footer

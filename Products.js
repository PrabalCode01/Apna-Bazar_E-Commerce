import React from 'react'
import ProductsCard from './ProductsCard'

const Products = ({products}) => {

  return (
    <div className='py-10'>
        <div className='flex   items-center flex-col gap-5'>
            <h1 className='text-2xl bg-black text-white py-2 w-80 text-center cursor-pointer'>
                Shopping Everyday
            </h1>
            <span className='w-20 h-[3px] bg-black'></span>
            <p className='max-w-[700px] text-gray-700 text-center font-sans'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illo praesentium alias quis porro quidem tenetur eveniet eos, assumenda fugit. Aut ea aperiam sint praesentium possimus ex doloribus reiciendis nihil.
            </p>

            
        </div>
        <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10'>
          {
            products.map((item)=>(
                <ProductsCard key={item.id} product={item}/>
              
            ) )
          }
        </div>
      
    </div>
  )
}

export default Products

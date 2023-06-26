import axios from "axios"

export async function   productData(){
    const products = await axios.get("https://fakestoreapi.com/products");
    
    return products;
};

// import axios from 'axios'
// import { useState, useEffect } from 'react'

//     useEffect(()=>{
//         axios.get("https://fakestoreapi.com/products")
//         .then((res)=>{
//             setdata(res.data )
//         })
//     },[])

   
// }
// export default productData;

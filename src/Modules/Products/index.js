import React, { useEffect, useState } from 'react'

import ProductCard from '../../ProductCard'
import Categories from '../../Components/Categories'

function Products() {
  const [products,setProduct]=useState([])
    useEffect(()=>{
        const fechProduct = async()=>{
      const response =  await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
     
      setProduct(data)
        }
        fechProduct()
    },[])
  return (
    <div>
    <Categories/>
    <div className="flex flex-col text-center w-full">
                    <h className="text-2xl text-indigo-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">ALL PRODUCTS </h1>
                </div>
    {
      
      products.length > 0? <ProductCard products={products}/> : <div>Loading......</div>
    }
      
      
    </div>

  )
}

export default Products
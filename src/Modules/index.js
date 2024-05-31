import React, { useEffect, useState } from 'react'
import Hero from '../Hero'
import Products from '../ProductCard'
import Categories from '../Components/Categories'
import StatCart from '../Components/StatCard'
import ProductCard from '../ProductCard'


function Home() {
    const [products,setProduct]=useState([])
    useEffect(()=>{
        const fechProduct = async()=>{
      const response =  await fetch('https://fakestoreapi.com/products/?limit=12')
      const data = await response.json()
      console.log(data)
      setProduct(data)
        }
        fechProduct()
    },[])
    return (
        <>
        <Hero/>
        <div className="flex flex-col text-center w-full">
                    <h className="text-2xl text-indigo-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">MOST POPULAR PRODUCTS</h1>
                </div>
                {
                    products.length > 0 ?
                    <ProductCard products={products}/> : <div className='text-2xl'>Loading.....</div>
                }
        <Products/>
        <Categories/>
        <StatCart/>
        
        </>
        
    )
}

export default Home
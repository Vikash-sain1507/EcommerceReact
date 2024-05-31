import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../ProductCard'

function CategoryProducts() {

    const {name} = useParams()
    const [products,setProduct]=useState([])
    useEffect(()=>{
        const fechProduct = async()=>{
      const response =  await fetch(`https://fakestoreapi.com/products/category/${name}`)
      const data = await response.json()
      console.log(data)
      setProduct(data)
        }
        fechProduct()
    },[])
    if(products.length === 0) return <div className='text-3xl'>Loading......</div>
  return (
   <ProductCard products={products}/>
  )
}

export default CategoryProducts
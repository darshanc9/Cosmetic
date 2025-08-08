import React from 'react'
import Slider from './components/Slider'
import ProductCategory from './components/ProductCategory'
import Feature from './components/Feature'
import ProductList from './components/ProductList.jsx'
import BestSellingProduct from './components/BestSellingProduct.jsx'
import ExploreProduct from './components/ExploreProduct.jsx'
import Counter from './components/Counter.jsx'

export default function Homepage() {
  return (
    <>
     <Slider/>
     {/* <Counter/> */}
     <ProductList/>
     <ProductCategory/>
     <BestSellingProduct/>
     <ExploreProduct/>
     <Feature/>
    </>
  )
}

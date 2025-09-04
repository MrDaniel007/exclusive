import React, { useEffect } from 'react'
import Bunner from './Bunner'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../redux/product/productSlice'
import ProductList from '../components/productList/ProductList'

function Home() {
  const { products, loading, error, category } = useSelector((state) => state.product)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProduct(category))
  }, [category])
  console.log(products);

  return (
    <div>

      <Bunner />
      <ProductList data={products} />
    </div>
  )
}

export default Home

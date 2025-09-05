import React from 'react'
import "./cart.scss"
import { useDispatch } from 'react-redux'
import { removeCart } from '../../redux/cartS/cartSlice'

function Cart({ boxes }) {
  const dispatch = useDispatch()
  return (
  <div className='cart-card'>
            <img className='jey' src={boxes.thumbnail} alt="" />
            <div>{boxes.title}</div>
            <p>{boxes.price}</p>
            <div className='card-sc'>02</div>
            <p>$1100</p>
          </div>
  )
}

export default Cart

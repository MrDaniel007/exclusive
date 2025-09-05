import React from 'react'
import "./Card.scss"
import like from "../../assets/love.svg"
import { useDispatch, useSelector } from 'react-redux'
import { addWish } from '../../redux/wish/wishSlice'
import { addCart } from '../../redux/cartS/cartSlice'

import { FaRegHeart } from "react-icons/fa6";

function Card({cart}) {
  const {items} = useSelector((state) => state.favorite)

  const isLiked = items.some((x) => x.id == cart.id)
  const dispatch = useDispatch()
  return (
   <div className="card-product">
      <div className="board">
        <img className="productImage" src={cart.thumbnail} alt="" />
        <div className="cardButton">
           <div>
            {
      
              isLiked ? (  <FaRegHeart className='red' />) : ( <img className='imgg' onClick={() => dispatch(addWish(cart))} src={like} alt="" />) 
            }
           </div>
        {/* <div><img src={icon2} alt="" /></div> */} 
        </div>
        <div className="discounts">
          <p>-40%</p>
        </div>
        <button onClick={() =>  dispatch(addCart(cart))} className="hhhh">Add To Cart</button>
      </div>

      <div className="info">
        <h1>{cart.title}</h1>
        <div className="prices">
          <p className="actualPrice">$120</p>
          <p className="oldPrice">$160</p>
        </div>
        <div className="rate">
          <p>(88)</p>
        </div>
      </div>
    </div>
  )
}

export default Card

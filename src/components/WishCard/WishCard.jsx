import React from 'react'
import "./WishCard.scss"
 import wbag from "../../assets/wbag.png"
 import trash from "../../assets/trash.svg"
 import { removeWish } from '../../redux/wish/wishSlice'
 import { useDispatch } from 'react-redux'

function WishCard({box}) {
  const dispatch = useDispatch()
  return (
<div className="card wish">
                <div className='board'>
                    <img className='bagImg' src={box.thumbnail} alt="" />
                    <div className="cardButton">
                  <div><img 
                        onClick={() => dispatch(removeWish(box.id))} src={trash} alt="" /></div>
                    </div>
                    <div className='discount'>
                        <p className='pk'>-35%</p>
                    </div>
                    <button className='cartsBtn'>Add To Cart</button>
                </div>

                <div className='info'>
                    <h1>Gucci duffle bag</h1>
                    <div className='prices'>
                        <p className='actualPrice'>$960</p>
                        <p className='oldPrice'>$1160</p>
                    </div>
                </div>
            </div>
  )
}

export default WishCard

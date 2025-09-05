import React from 'react'
import Cart from '../components/carts/Cart'
import { useSelector } from 'react-redux'
import "./Carts.scss"

function Carts() {
  const { itema } = useSelector((state) => state.buy)
 console.log(itema);
 
  return (
    <div>
          <div>
      <div className='start'><p>Home</p><p>/</p><p>Cart</p></div>
      <div className='cart-container'>
        <div className='first'>
          <div className='cart-title'> <p>Product</p><p>Price</p><p>Quantity</p><p>Subtotal</p></div>
            {
            itema?.map((itemd) =>(
                 <Cart  key={itemd.id} boxes={itemd} />
            ))
        }
        </div>
        <div className='cart-btns'> <button className='cart-btn1'>Return To Shop</button>  <button onClick={() => dispatch(removeCart(boxes.id))} className='cart-btn2'>Update Cart</button>  </div>
        <div className='cart-finish'>
          <div className='send'>
            <input className='send-input' type="text" placeholder='Coupon Code' />
            <button className='send-btn'>Apply Coupon</button>
          </div>
          <div className='total'>
            <h1 className='total-h1'>Cart Total</h1>
            <div className='total-div'> <h6>Subtotal:</h6>$1750</div>
            <hr />
            <div className='total-div2'> <h6>Shipping:</h6>Free</div>
            <hr />
            <div className='total-div3'><h6>Total:</h6>$1750</div>
            <button className='total-btn'>Procees to checkout</button>
          </div>


        </div>
      </div>
    </div>
    
   
    </div>
  )
}

export default  Carts

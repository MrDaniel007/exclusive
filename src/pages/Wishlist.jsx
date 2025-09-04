// import React from 'react'
// import "./Wishlist.scss"
// import wbag from "../assets/wbag.png"
// import trash from "../assets/trash.svg"
// import cart1 from "../assets/cart1.svg"
// import colonka from "../assets/colonka.png"
// import joy from "../assets/joy.png"
// import jac from "../assets/jac.png"
// import { useDispatch, useSelector } from 'react-redux'

// function WishList() {
//       const { products, loading, error, category } = useSelector((state) => state.product)
//   console.log(products);
  
//   return (
//     <div className='wish'>
//       <div className='head1'> <h2>Wishlist (4)</h2><button className='btnr'><p>Move All To Bag</p></button></div>
//       <div className='card1'>
//         <div className='mega-card'>
//         <div className='mini-card'>
//           <img className='trash' src={trash} alt="" />
//           <p className='dis'>-35%</p>
//           <img className='imgs' src={wbag} alt="" />
//           <button className='btn1'>
//             <img className='imgd' src={cart1} alt="" />
//             <p className='pp'>Add To Cart</p>
//           </button>
//         </div>
//         <div className='foot'>
//          <h2 className='f1'>Gucci duffle bag</h2>
//       <div className='foo'>  <p className='f2'>$960</p> <p className='f3'>$1160</p></div> 
//         </div></div>
//                 <div className='mega-card'>
//         <div className='mini-card'>
//           <img className='trash' src={trash} alt="" />
//           <img className='imgs' src={colonka} alt="" />
//           <button className='btn1'>
//             <img className='imgd' src={cart1} alt="" />
//             <p className='pp'>Add To Cart</p>
//           </button>
//         </div>
//         <div className='foot'>
//          <h2 className='f1'>RGB liquid CPU Cooler</h2>
//       <div className='foo'>  <p className='f2'>$1960</p> </div> 
//         </div></div>
//                 <div className='mega-card'>
//         <div className='mini-card'>
//           <img className='trash' src={trash} alt="" />
//           <img className='imgs' src={joy} alt="" />
//           <button className='btn1'>
//             <img className='imgd' src={cart1} alt="" />
//             <p className='pp'>Add To Cart</p>
//           </button>
//         </div>
//         <div className='foot'>
//          <h2 className='f1'>GP11 Shooter USB Gamepad</h2>
//       <div className='foo'>  <p className='f2'>$550</p></div> 
//         </div></div>
//                 <div className='mega-card'>
//         <div className='mini-card'>
//           <img className='trash' src={trash} alt="" />
//           <img className='imgs' src={jac} alt="" />
//           <button className='btn1'>
//             <img className='imgd' src={cart1} alt="" />
//             <p className='pp'>Add To Cart</p>
//           </button>
//         </div>
//         <div className='foot'>
//          <h2 className='f1'>Quilted Satin Jacket</h2>
//       <div className='foo'>  <p className='f2'>$750</p></div> 
//         </div></div>
//       </div>



//        <div className='head1'> <h2> <div className='b'></div>Just For You</h2><button className='btnd'><p>See All</p></button></div>
//       <div className='card1'>
//         <div className='mega-card'>
//         <div className='mini-card'>
//           <img className='trash' src={trash} alt="" />
//           <img className='imgs' src={wbag} alt="" />
//           <button className='btn1'>
//             <img className='imgd' src={cart1} alt="" />
//             <p className='pp'>Add To Cart</p>
//           </button>
//         </div>
//         <div className='foot'>
//          <h2 className='f1'>Gucci duffle bag</h2>
//       <div className='foo'>  <p className='f2'>$960</p> </div> 
//         </div></div>
//                 <div className='mega-card'>
//         <div className='mini-card'>
//           <img className='trash' src={trash} alt="" />
//           <p className='dis'>-35%</p>
//           <img className='imgs' src={wbag} alt="" />
//           <button className='btn1'>
//             <img className='imgd' src={cart1} alt="" />
//             <p className='pp'>Add To Cart</p>
//           </button>
//         </div>
//         <div className='foot'>
//          <h2 className='f1'>RGB liquid CPU Cooler</h2>
//       <div className='foo'>  <p className='f2'>$960</p> <p className='f3'>$1160</p></div> 
//         </div></div>
//                 <div className='mega-card'>
//         <div className='mini-card'>
//           <img className='trash' src={trash} alt="" />
//           <p className='dis'>-35%</p>
//           <img className='imgs' src={wbag} alt="" />
//           <button className='btn1'>
//             <img className='imgd' src={cart1} alt="" />
//             <p className='pp'>Add To Cart</p>
//           </button>
//         </div>
//         <div className='foot'>
//          <h2 className='f1'>GP11 Shooter USB Gamepad</h2>
//       <div className='foo'>  <p className='f2'>$960</p> <p className='f3'>$1160</p></div> 
//         </div></div>
//                 <div className='mega-card'>
//         <div className='mini-card'>
//           <img className='trash' src={trash} alt="" />
//           <p className='dis'>-35%</p>
//           <img className='imgs' src={wbag} alt="" />
//           <button className='btn1'>
//             <img className='imgd' src={cart1} alt="" />
//             <p className='pp'>Add To Cart</p>
//           </button>
//         </div>
//         <div className='foot'>
//          <h2 className='f1'>Quilted Satin Jacket</h2>
//       <div className='foo'>  <p className='f2'>$960</p> <p className='f3'>$1160</p></div> 
//         </div></div>
//       </div>
//     </div>
//   )
// }

// export default WishList

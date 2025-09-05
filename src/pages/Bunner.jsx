import React, {useEffect} from 'react'
import "./Bunner.css"
import arrow from "../assets/arrow.svg"
import arrows from "../assets/arrow.png"
import apple from "../assets/apple.png"
import iphone from "../assets/iphone.png"
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../redux/category/categorySlice'
import { setCategory } from '../redux/product/productSlice'
import mainImage from "../assets/mainImage.png"
import Carousel from 'react-bootstrap/Carousel';

function Bunner() {
  const {list, loading, error} = useSelector ((state) => state.category)
  const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getCategory())
    }, [])
   function filterByCategory(item)    {
    dispatch(setCategory(item))
   } 
  
  return (
    <div className='bunner'>
      <ul className='b-left'>
        {
          list.map((item, index) => (
            <li className='li' onClick={() => filterByCategory(item)} key={index}>{item}</li>
          ))
        }
        {/* <li className='tit'>Woman’s Fashion <img className='i' src={arrow} alt="" /></li>
        <li className='tit'>Men’s Fashion <img className='i' src={arrow} alt="" /></li>
        <li className='tit'>Electronics</li>
        <li className='tit'>Home & Lifestyle</li>
        <li className='tit'>Medicine</li>
        <li className='tit'>Sports & Outdoor</li>
        <li className='tit'>Baby’s & Toys</li>
        <li className='tit'>Groceries & Pets</li>
        <li className='tit'>Health & Beauty</li> */}

      </ul>
      <div className='liner'></div>
      {/* <div className='big-b'>
   <div className='left'>   <div className='ip1'>
        <img className='im' src={apple} alt="" />
        <p className='name'>iPhone 14 Series</p>
      </div>
      <div className='ip2'>
        Up to 10% <br />off Voucher
      </div>
      <p className='p1'>Shop Now <img className="img2" src={arrows} alt="" /></p></div>
      <img className='img14' src={iphone} alt="" />
      </div> */}
        <div className='carousel'>
                <Carousel>
                    <Carousel.Item>
                        {/* <ExampleCarouselImage text="First slide" /> */}
                        <img className='imgk' src={mainImage} alt="" />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <ExampleCarouselImage text="Second slide" /> */}
                        <img className='imgk' src={mainImage} alt="" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <ExampleCarouselImage text="Third slide" /> */}
                        <img className='imgk' src={mainImage} alt="" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
    </div>
  )
}

export default Bunner

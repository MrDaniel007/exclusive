import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"
import logo from "../../assets/logo.png"
import search from "../../assets/search.svg"
import love from "../../assets/love.svg"
import cart from "../../assets/cart.svg"
import Bunner from '../../pages/Bunner'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

function Header() {
  const {items} = useSelector((state) => state.favorite)
  const {itema} = useSelector((state) => state.buy)
  const {t, i18n} = useTranslation()
  function change(e) {
    let lng = e.target.value;
    i18n.changeLanguage(lng)
  }
  return (
    <header className='header'>
        <div className='top-header'>
            <div className='header-select'>
                <div>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                <h3 className='h14'>ShopNow</h3></div>
                <select onChange={change} className='select'>
                    <option value="kg">KGZ</option>
                    <option value="en">ENG</option>
                    <option value="ru">RUS</option>
                </select>
            </div>
        </div>
        <nav className='navbar'></nav>
        <div className='head'>
          <img className='logo' src={logo} alt="" />
     <div className='Link'> <Link to="">{t("home")}</Link>
      <Link to="/about">{t("about")}</Link>
      <Link to="/contact">{t("contact")}</Link>
      <Link to="/register">{t("signUp")}</Link></div>
      <input className='input' type="text" placeholder='What are you looking for?'/>
      <button className='btn'><img src={search} alt="" /></button>
    <Link to="/wishlist">  <img className='love' src={love} alt="" /><p className='numbers'>{items.length}</p></Link>
    <Link to="/carts"><img className='cart' src={cart} alt="" /><p className='num'>{itema.length}</p></Link>  
      </div>
      <div className='line'></div>
      </header>
  
  )
}

export default Header

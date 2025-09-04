import React from 'react'
import { useSelector } from 'react-redux'
import './Wishl.scss'
import WishCard from '../components/WishCard/WishCard'


function Wish() {
  const { items } = useSelector((state) => state.favorite)

  console.log(items);

  return (
    <div className='cont'>
      {
        items.map((item) => (
          <WishCard key={item.id} box={item} />
        ))
      }

    </div>
  )
}

export default Wish
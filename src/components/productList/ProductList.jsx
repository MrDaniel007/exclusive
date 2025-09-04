import React from 'react'
import Card from "../card/Card"
import "./List.scss"

function ProductList({data}) {
  return (
    <div className='List-card'>{    data.map((item) =>(
        <Card key={item.id} cart={item}/>
    ))


        }
  
    </div>
  )
}

export default ProductList

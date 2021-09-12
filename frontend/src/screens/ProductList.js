import React from 'react'

import data from '../data'
import Product from '../components/Product'

export default function ProductList() {
  return (
    <div>
        <div className="row center">
          {data.products.map(product => (
            <Product key={product._id} product={product}/>
            ))}
        </div>
    </div>
  )
}

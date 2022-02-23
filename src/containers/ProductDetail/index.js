import React, { useEffect, useState } from 'react'
import { detailEffect } from 'store/home/effects'

import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  let { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    detailEffect(id).then(res => {
      setData(res)
    })
  }, [id]);

  return (
    <div>
      <h2>Product detail</h2>
      <ul>
        <li>sku: { data?.sku }</li>
        <li>product_name: { data?.product_name }</li>
        <li>qty: { data?.qty }</li>
        <li>unit: { data?.unit }</li>
        <li>price: { data?.price }</li>
      </ul>
    </div>
  )
}

export default ProductDetail
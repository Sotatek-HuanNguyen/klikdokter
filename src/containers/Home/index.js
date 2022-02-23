import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import s from './style.module.scss'

import { listEffect } from 'store/home/effects/index'
import Product from 'components/Product'
import { deleteEffect } from 'store/home/effects'
import { Link } from 'react-router-dom'

const Home = () => {
  const [form, setForm] = useState(false);
  const [editForn, setEditForn] = useState(false);
  const [product, setProduct] = useState(null);
  const state = useSelector( state => state.home.counts.products)
  const dispatch = useDispatch()
  
  useEffect(() => {
    listEffect(dispatch)
  }, []);

  const handleDelete = (id) => {
    deleteEffect(id, dispatch)
  }

  return (
    <div className={s.wrapper}>
      <div className={s.wrapper_control}>
        <button
          onClick={() => setForm(!form)}
        >
          Add product
        </button>
      </div>

      {
        form && (
          <Product isCreate={true} onClose={() => setForm(false)} />
        )
      }
      {
        editForn && (
          <Product isCreate={false} onClose={() => setEditForn(false)} initialValues={product} />
        )
      }

      <table className={s.wrapper_table}>
        <thead>
          <th>
            sku
          </th>
          
          <th>
            product_name
          </th>

          <th>
            actions
          </th>
        </thead>

        <tbody>
          {
            state?.map((item, i) => (
              <tr key={i}>
                <td>{ item.sku }</td>
                <td>
                  <Link
                   to={{
                    pathname: `product/${item.sku}`
                  }}
                  >{item.product_name }</Link>
                </td>
                <td>
                  <button onClick={() => {
                    setEditForn(true)
                    setProduct(item)
                  }}>
                    edit
                  </button>
                  |
                  <button onClick={() => handleDelete(item.sku)} >
                    delete
                  </button>
                </td>
              </tr>
            ))
          }
         
        </tbody>
      </table>
    </div>
  )
}

export default Home
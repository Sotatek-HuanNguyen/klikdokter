import React from 'react'
import { useDispatch } from 'react-redux'
import { Formik } from 'formik'
import s from './style.module.scss'

import { addEffect, updateEffect} from 'store/home/effects'

const Product = ({isCreate, initialValues, onClose}) => {
  const dispatch = useDispatch();
  const defaultValues = {
    sku: '',
    product_name: '',
    qty: '',
    price: '',
    unit: '',
    status: ''
  };


  const handleSubmit = (formValues, { resetForm }) => {
    if (isCreate) {
      addEffect(formValues, dispatch)
      onClose()
    } else {
      updateEffect(formValues, dispatch)
      onClose()
    }
  }

  return (
    <Formik
      initialValues={initialValues || defaultValues}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form className={s.form} onSubmit={handleSubmit}>
          <input
            className={s.field}
            type="text"
            name="sku"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.sku}
            placeholder="Sku"
          />
          <input
            className={s.field}
            type="text"
            name="product_name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.product_name}
            placeholder="Product name"
          />
          <input
            className={s.field}
            type="text"
            name="qty"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.qty}
            placeholder="Qty"
          />
          <input
            className={s.field}
            type="text"
            name="unit"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.unit}
            placeholder="Unit"
          />
          <input
            className={s.field}
            type="text"
            name="price"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.price}
            placeholder="Price"
          />
          <input
            className={s.field}
            type="price"
            name="status"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.status}
            placeholder="Status"
          />
        
          <button type="button" onClick={onClose}>
            Cancel
          </button>
          <button type="submit">
            Submit
          </button>
        </form>
      )}
    </Formik>
  )
}

export default Product
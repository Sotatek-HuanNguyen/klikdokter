import React from 'react'
import { Formik } from 'formik';
import { useHistory } from "react-router-dom";

import { loginUsernameEffect } from 'store/auth/effects'

import s from './style.module.scss'

const Login = () => {
  let history = useHistory();
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, { setSubmitting }) => {
        loginUsernameEffect(values).then(res => {
          console.log(res)
          res?.token && history.push("/");
        })
      }}
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
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <input
            className={s.field}
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  )
}

export default Login
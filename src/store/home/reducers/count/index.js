import { createReducer } from '@reduxjs/toolkit'
import { getListSuccess, addSuccess, updateSuccess, removeSuccess } from './../../actions/index'

import * as _ from 'lodash'

const initialState = {
  products: [],
}

const counts = createReducer(initialState, {
  [getListSuccess.type]: (state, action) => ({
    ...state,
    products: action.payload
  }),
  [addSuccess.type]: (state, action) => ({
    ...state,
    products: [
      ...state.products,
      ...action.payload
    ]
  }),
  [updateSuccess.type]: (state, action) => ({
    ...state,
    products: _.map(state.products, (prod) => {
      return prod.id === action.payload.id ? action.payload : prod
    })
  }),
  [removeSuccess.type]: (state, action) => ({
    ...state,
    products: _.reject(state.products, (product) => {
      return product.id === action.payload
    })
  }),
  // [reset.type]: (state, action) => ({
  //   ...state,
  //   counter: 0,
  // }),
})

export default counts
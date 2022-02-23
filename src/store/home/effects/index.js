import axios from 'axios'
import * as actions from './../actions/index'

// utils
import authRequest from 'utils/requests/authRequest'

export function listEffect(dispatch) {
  const url = "https://hoodwink.medkomtek.net/api/items"
  return authRequest
    .get(url)
    .then((res) => {
      dispatch(actions.getListSuccess(res.data))
      return res?.data
    })
    .catch(e => {
      throw e.response.data
    })
}

export function addEffect(data, dispatch) {
  const url = "https://hoodwink.medkomtek.net/api/item/add"
  return authRequest
    .post(url, data)
    .then((res) => {
      listEffect(dispatch)
      return res?.data
    })
    .catch(e => {
      throw e
    })
}
export function updateEffect(data, dispatch) {
  const url = "https://hoodwink.medkomtek.net/api/item/update"
  return authRequest
    .post(url, data)
    .then((res) => {
      dispatch(actions.updateSuccess(res.data))
      return res?.data
    })
    .catch(e => {
      throw e
    })
}
export function deleteEffect(sku, dispatch) {
  const url = "https://hoodwink.medkomtek.net/api/item/delete"
  return authRequest
    .post(url, {sku})
    .then((res) => {
      dispatch(actions.removeSuccess(res?.data.id))
      return res?.data
    })
    .catch(e => {
      throw e
    })
}
export function detailEffect(sku, dispatch) {
  const url = "https://hoodwink.medkomtek.net/api/item/search"
  return authRequest
    .post(url, {sku})
    .then((res) => {
      return res?.data
    })
    .catch(e => {
      throw e
    })
}

import axios from 'axios'

import setToken from 'utils/auth/set-token'

export const loginUsernameEffect = (formData) => 
  axios
    .post('https://hoodwink.medkomtek.net/api/auth/login', formData)
    .then((res) => {
      setToken(res)
      return res?.data
    })
    .catch((error) => {
      throw error?.response?.data
    })

export const registerUsernameEffect = (formData) => 
  axios
    .post('https://hoodwink.medkomtek.net/api/register', formData)
    .then((res) => {
      return res?.data
    })
    .catch((error) => {
      throw error
    })
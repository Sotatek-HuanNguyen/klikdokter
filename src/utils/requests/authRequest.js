import axios from 'axios'

import removeToken from 'utils/auth/remove-token'
import getToken from 'utils/auth/get-token'

const base = (method, url, data, other = {}) =>
  new Promise(async (resolve, reject) => {
    const { headers = {}, options = {} } = other
    const requestConfig = {
      method,
      data,
      url,
      headers: {
        'Authorization': getToken(),
        Accept: 'application/json, text/plain, */*',
        ...headers
      },
      ...options,
    };

    try {
      const response = await axios(requestConfig);
      resolve(response);
    } catch (error) {
      if (error?.response?.status === 401) {
        removeToken()
        window.location.reload()
      }
      reject(error)
    }
  }
  )

const authRequest = {};
['get', 'post', 'put', 'delete', 'patch'].forEach(method => {
  authRequest[method] = (...props) => base(method.toUpperCase(), ...props)
});

export default authRequest;
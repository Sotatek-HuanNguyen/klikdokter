import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import getToken from 'utils/auth/get-token'

export const AuthRoute = ({ children, ...rest }) => {
  let auth = getToken()

  return (
    <Route
      {...rest}
      render={({ location }) => {
        if(auth) {
          return children
        } else {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location },
              }}
            />
          )
        }
      }}
    />
  )
}

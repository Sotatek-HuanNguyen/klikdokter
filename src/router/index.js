import {lazy} from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { history } from './../store/root-store'
import { AuthRoute } from './PrivateRouter'


import DefaultLayout from '../layout/DefaultLayout'
import Main from '../layout/MainLayout'

import HomePage from '../containers/Home'
import Register from '../containers/Register'
import Login from '../containers/Login'
import ProductDetail from '../containers/ProductDetail'

const Component = (props) => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" exact>
          <DefaultLayout>
            <Login />
          </DefaultLayout>
        </Route>

        <Route path="/register" exact>
          <DefaultLayout>
            <Register />
          </DefaultLayout>
        </Route>

        <AuthRoute path="/product/:id" exact>
          <Main>
            <ProductDetail />
          </Main>
        </AuthRoute>

        <AuthRoute path="/" exact>
          <Main>
            <HomePage />
          </Main>
        </AuthRoute>
      </Switch>
    </Router>
  )
}

export default Component
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './store/root-store'


const LazyApp = React.lazy(() => import('./App'));


ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyApp />
      </Suspense>
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

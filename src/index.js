import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals'
import { BrowserRouter} from 'react-router-dom'
import { createStore , applyMiddleware} from 'redux'

import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ToastContainer, toast } from "react-toastify";
import Routes from './components/Routes'

import rootReducer from './redux/reducers'

import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './assets/css/grid.css'
import './assets/css/theme.css'
import './assets/css/index.css'

import Layout from './components/layout/Layout'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

document.title = 'Amazon Website'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      {/* <Layout/> */}
      <BrowserRouter>
      <Routes/>
      </BrowserRouter>  
      <ToastContainer/>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

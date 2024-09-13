import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './index.css'

import store from './context/store.jsx';
import { retrieveDepartments } from './actions/departments.js';
import { retrieveEmployees } from './actions/employees.js';

store.dispatch(retrieveDepartments())
store.dispatch(retrieveEmployees())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)

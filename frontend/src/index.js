import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from './store';
// import SupportAdmin from './SupportAdmin'

// const path = window.location.pathname;

ReactDOM.render(
  <Provider store={store}>
    <App />
{/* {
  path.indexOf('/support') === -1 ?  <App/> : <SupportAdmin/>
} */}
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();

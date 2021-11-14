import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Header from './Header';

const MyApp = () => {
  return (
    <div>
  <Header>
     
      </Header>
      <h1>Why Love Running with us?</h1>
      <h2>Feel Healthy</h2>
      <h2>Feel Free</h2>

    </div>
  )
}

export default Header
ReactDOM.render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Header from './Header';
import BodyHomePage from './BodyHomePage';
import Gallery from './Gallery';

const MyApp = () => {
  return (
    <div>
  <Header>
     
      </Header>
      <BodyHomePage>
      </BodyHomePage>

      

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

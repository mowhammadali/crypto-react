import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './Styles/Global/GlobalStyles';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <GlobalStyles />
    <App />
  </React.Fragment>
);



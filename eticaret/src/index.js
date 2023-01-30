import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
document.body.style.marginRight = 0;

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter> 
);

reportWebVitals();

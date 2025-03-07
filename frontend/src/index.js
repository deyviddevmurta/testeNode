import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Rotas from './routes/routes';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Router do App
root.render(
  <React.StrictMode>
    <Rotas />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

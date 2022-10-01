import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import AppI from './AppI';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <AppI />
  </React.StrictMode> 
);

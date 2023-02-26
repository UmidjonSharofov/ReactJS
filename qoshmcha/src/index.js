import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './root'
import Root  from "./root.js"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root/>
  </React.StrictMode>
);


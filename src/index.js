import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StarsBg from './StarsBg.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <div className='down-arrow'/>
    <StarsBg />
  </React.StrictMode>,
  // document.getElementById('root')
);




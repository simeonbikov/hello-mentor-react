import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HelloMentor from './HelloMentor';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelloMentor />
  </React.StrictMode>
);
reportWebVitals();

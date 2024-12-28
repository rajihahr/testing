import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import BloodConnectPage from './BloodConnectPage';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BloodConnectPage />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

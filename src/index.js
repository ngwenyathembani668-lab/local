import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import './index.css';
import App from './App';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/services" element={<App />} />
        <Route path="/about" element={<App />} />
        <Route path="/testimonials" element={<App />} />
        <Route path="/contact" element={<App />} />
      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);



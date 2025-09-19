import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '../css/main.css';

const container = document.getElementById('root');
if (!container) {
  const el = document.createElement('div');
  el.id = 'root';
  document.body.appendChild(el);
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

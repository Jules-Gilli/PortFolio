import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter basename="/PortFolio">
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}

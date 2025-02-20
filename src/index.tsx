import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</StrictMode>
);

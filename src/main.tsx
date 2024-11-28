import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider, FilledContext } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import App from './App.tsx';
import './index.css';

const helmetContext = {};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider context={helmetContext}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>
);

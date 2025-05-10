import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './App';
import { ThemeProvider } from './contexts/theme';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // Create a root

root.render( // Use root.render instead of ReactDOM.render
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
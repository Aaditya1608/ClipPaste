import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.jsx';
import './index.css';

const root = createRoot(
  document.getElementById('root')
);
root.render(
    <HashRouter>
    <ThemeProvider>
        <App/>
    </ThemeProvider>
    </HashRouter>
);
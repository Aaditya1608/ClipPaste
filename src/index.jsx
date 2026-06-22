import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import './index.css';

const root = createRoot(document.body);
root.render(
    <ThemeProvider>
        <App/>
    </ThemeProvider>
);
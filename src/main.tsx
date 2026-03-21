import React from 'react';
import ReactDOM from 'react-dom/client';
import Portfolio from './Portfolio.tsx';
import { AppConfigProvider } from './components/AppConfigContext';
import './assets/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppConfigProvider>
      <Portfolio />
    </AppConfigProvider>
  </React.StrictMode>,
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { CssVarsProvider } from '@mui/joy/styles';
import { App } from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CssVarsProvider/>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextProvider } from './Components/utils/global.context';
import StorageProvider from './Components/utils/localStorage.context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <StorageProvider>
      <App />
      </StorageProvider>
    </ContextProvider>
  </React.StrictMode>
);



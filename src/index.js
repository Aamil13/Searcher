import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

import { ResultContextProvider } from './Context/ResultContextProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ResultContextProvider>

  <React.StrictMode>
  <App />
  </React.StrictMode>
  
  </ResultContextProvider>
);


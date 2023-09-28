import React from 'react'
import ReactDOM from 'react-dom/client'
import { PortfolioApp } from './PortfolioApp'

import '@fontsource-variable/jura';
import '@fontsource/poppins';
import './index.css';



import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PortfolioApp />
    </BrowserRouter>
  </React.StrictMode>,
)

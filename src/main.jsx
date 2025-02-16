import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

import { HashRouter } from 'react-router-dom'

import 'animate.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import './dist/css/main.css'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <App />
    </HashRouter>
  </React.StrictMode>,
)

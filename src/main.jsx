import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import EuTeAmo from './EuTeAmo.jsx'
import { BrowserRouter, Routes, Route  } from "react-router";

createRoot(document.getElementById('root')).render(
  <BrowserRouter> 
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/euteamo" element={<EuTeAmo />} />
    </Routes>
  </BrowserRouter>
)

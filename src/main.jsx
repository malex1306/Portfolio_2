import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import BentoGrind from "../components/BentoGrind.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BentoGrind/>
  </StrictMode>,
)

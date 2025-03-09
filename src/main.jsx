import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import BentoGrind from "../components/BentoGrind.jsx";
//import ContactMe from "../components/Contact.jsx";
const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=Anton+SC&display=swap';
document.head.appendChild(fontLink);

const fontLink2 = document.createElement('link');
fontLink2.rel = 'stylesheet';
fontLink2.href = 'https://fonts.googleapis.com/css2?family=Zain:ital,wght@0,200;0,300;0,400;0,700;0,800;0,900;1,300;1,400&display=swap';
document.head.appendChild(fontLink2);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BentoGrind/>
  </StrictMode>,
)

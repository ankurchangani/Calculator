import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Calc from './component/calc/Calc.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Calc />
  </StrictMode>
)

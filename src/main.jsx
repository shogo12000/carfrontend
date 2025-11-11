import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FRoutes from './routes/routes'
 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FRoutes />
  </StrictMode>,
)

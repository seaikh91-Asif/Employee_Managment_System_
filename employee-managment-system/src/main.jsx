import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthContext from './Context/AuthContext.jsx'
import TaskContext from './Context/TaskContext.jsx'

localStorage.clear()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
      <TaskContext>
        <App/>
      </TaskContext>
    </AuthContext>
  </StrictMode>,
)

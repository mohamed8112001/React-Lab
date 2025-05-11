import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Parent from './components/todo/parent.jsx';
import UsersList from './components/users/userList.jsx';


createRoot(document.getElementById('root')).render(
  
  // <Parent/>
  <StrictMode>
        <App/> 
  </StrictMode>,
)

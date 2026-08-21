import React, { useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage'

const App = () => {

  const [user, setUser] = useState(null)

  const handleLogin = (email, password) => {
    if (email == 'admin@example.com' && password == '123'){
      setUser('admin')
      console.log(user)
    } else if (email == 'employee1@example.com' && password == '123') {
      setUser('employee1')
      console.log(user)
    }
     else {
      alert("Invalid Creadentials"); 
    }
  }
  
  
  return (
    <>
     {!user ? (
  <Login handleLogin={handleLogin} />
) : user === 'admin' ? (
  <AdminDashboard />
) : (
  <EmployeeDashboard />
)}
      
     
    </>
  )
}

export default App
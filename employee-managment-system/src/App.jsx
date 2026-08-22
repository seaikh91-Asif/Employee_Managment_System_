import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage'
import { AuthContext } from './Context/AuthProvider'

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

  const data = useContext(AuthContext)
  console.log(data)
  
  
  return (
    <>
      {!user ? (<Login handleLogin={handleLogin} /> ) : user === 'admin' ? (<AdminDashboard /> ) : (<EmployeeDashboard />)}
    </>
  )
}

export default App
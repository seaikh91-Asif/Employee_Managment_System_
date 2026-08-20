import React, { useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage'

const App = () => {

  const [user, setUser] = useState(null)

  const handleLogin = (email, password) => {
    if (email == 'admin@example.com' && password == '123'){
      console.log("this is admin")
    } else if (email == 'employee1@example.com' && password == '123') {
      console.log("this is employee")
    }
     else {
      alert("Invalid Creadentials"); 
    }
  }
  handleLogin('employee1@example.com', '123')
  
  return (
    <>
      {!user ? <Login/> : ''}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </>
  )
}
 
export default App
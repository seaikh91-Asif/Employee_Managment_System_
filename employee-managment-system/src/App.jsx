import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage'
import { AuthContext } from './Context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUser, setLoggedInUser] = useState(nul)
  const authData = useContext(AuthContext)

  useEffect(() => {
    
    if(authData) {
      const loggedInUser = localStorage.getItem("loggedInUser")
      if(loggedInUser){
        setUser(loggedInUser.role)
      }
    }
  }, [authData]);
  

  useEffect(() => {
    setLocalStorage(); 
  }, []);

  const handleLogin = (email, password) => {
    if (email == 'admin@example.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
      
    } else if (authData) {
      const employee = authData && authData.employees.find((e) => e.email && e.password == password)
      if(employee) {
        setUser('employee')
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee'}))
      }
    }
     else {
      alert("Invalid Creadentials"); 
    }
  }

  const data = useContext(AuthContext)
  
  
  
  return (
    <>
      {!user ? (<Login handleLogin={handleLogin} /> ) : user === 'admin' ? (<AdminDashboard /> ) : (<EmployeeDashboard />)}
    </>
  )
}

export default App
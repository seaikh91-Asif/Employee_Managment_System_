import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../Utils/LocalStorage'

export const AuthContext = createContext()


const AuthProvider = ({children}) => {

 const [userData, setUserData] = useState(null)

 useEffect(() => {
  const {employees, admin} = getLocalStorage()
    const data = getLocalStorage()
    setUserData(data)
  }, [])

  const data = getLocalStorage()
  console.log(data)
  return (
    <div>
      <AuthProvider value={userData}>
        {children}
      </AuthProvider>
    </div>
  )
}



export default AuthProvider


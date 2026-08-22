import React, { createContext, useState } from 'react'
import { getLocalStorage } from '../Utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

  const [userData, setDserData] = useState(null)

  const data = getLocalStorage()
  console.log(data)
  return (
    <div>
      <AuthContext value="asif">
        {children}
      </AuthContext>
    </div>
  )
}

export default AuthProvider
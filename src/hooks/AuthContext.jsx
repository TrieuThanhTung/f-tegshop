/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {createContext, useContext, useState} from 'react'

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("accessToken") !== null
  );

  const handleLogin = (accessToken, refreshToken) => {
    localStorage.setItem('accessToken', JSON.stringify(accessToken));
    localStorage.setItem('refreshToken', JSON.stringify(refreshToken));
    setIsLoggedIn(true);
    console.log(isLoggedIn);
  }

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setIsLoggedIn(false);
  }

  return(
    <AuthContext.Provider value={{
      isLoggedIn,
      handleLogin,
      handleLogout
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext);
}
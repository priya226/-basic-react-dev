import React, { useContext, useState } from 'react'
const loginDetailContext = React.createContext()

function AuthProvider({children}) {
    const [activeUserInfo,setActiveUserInfo]=useState(null);
    const login=(userData)=>{
        setActiveUserInfo(userData);
    }
    const logout=()=>{
        setActiveUserInfo(null);
    }
    
  return (
    <div>
        <loginDetailContext.Provider value={{activeUserInfo,login,logout}}>
            {children}
        </loginDetailContext.Provider>
    </div>
  )
}

export default AuthProvider;

export const Auth =()=>{
    return useContext(loginDetailContext) //Instead of keeping useconext everytime 
    // directly export this function 
}

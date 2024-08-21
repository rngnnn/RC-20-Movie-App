import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react'


//!context alanı açtık
export const AuthContextt=createContext()



const AuthContext = ({children}) => {

//!register için (sitede zincir yapılı fetch işlemi var biz burada async await i tercih ettik)

const createUser=async()=>{

createUserWithEmailAndPassword(auth, email, password);

}




  return (
    <AuthContextt.Provider value={{}}>{children}</AuthContextt.Provider>
  )
}

export default AuthContext
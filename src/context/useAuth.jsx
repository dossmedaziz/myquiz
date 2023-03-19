import {createContext, useContext, useState} from "react";

const AuthContext = createContext(null)

export default function AuthProvider({children}) {
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    // setTimeout(()=>{
    //     setIsAuthenticated(false)
    // } , 5000)
    return (
        <AuthContext.Provider value={{isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
import {createContext, useContext, useState} from "react";

const AuthContext = createContext(null);

export default function AuthProvider({children}) {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    return (
        <AuthContext.Provider value={{isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);

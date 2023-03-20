import {createContext, useContext} from 'react';

export const UserContext = createContext(null);
export default function UserProvider({children}) {
    const user = {
        name: 'John Doe',
        email: '',
        avatar: '',
        role: 'admin',
        token: '',
    };
    const isAuthenticated = true;
    return (
        <UserContext.Provider value={{user, isAuthenticated}}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => useContext(UserContext);
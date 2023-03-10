import { Navigate,nav } from "react-router-dom";

export default function GuestGuard({children}) {
    // const {isAuthenticated} = useAuth();
    const isAuthenticated = false


    if(isAuthenticated){
        return <Navigate to="/dashboard" />
    }


    return children  
}
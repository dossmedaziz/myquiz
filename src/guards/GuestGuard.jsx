import { Navigate,nav } from "react-router-dom";

export default function GuestGuard({children}) {
    // const {isAuthenticated} = useAuth();
    const isAuthenticated = true


    if(isAuthenticated){
        return <Navigate to="/" />
    }


    return children  
}
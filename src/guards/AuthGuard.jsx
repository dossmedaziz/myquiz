import {Navigate} from "react-router-dom";

export default function AuthGuard({children}) {
    // const {isAuthenticated} = useAuth();
    const isAuthenticated = true
    if (!isAuthenticated) {
        return <Navigate to="/auth/login"/>
    }


    return children
}
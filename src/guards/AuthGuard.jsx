import {Navigate} from "react-router-dom";
import {useAuth} from "../context/useAuth";
import {useNavigate} from "react-router-dom";
import {useEffect, useLayoutEffect} from "react";

export default function AuthGuard({children}) {
    const {isAuthenticated} = useAuth();
    console.log("isAuthenticated", isAuthenticated);
    const navigate = useNavigate();
    useLayoutEffect(() => {
            if (!isAuthenticated) {
                navigate("auth/login");
            }
        }
        , [isAuthenticated]);

    return children
}
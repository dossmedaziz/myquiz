import {Navigate, nav} from "react-router-dom";
import {useAuth} from "../context/useAuth";
import {useNavigate} from "react-router-dom";
import {useLayoutEffect} from "react";

export default function GuestGuard({children}) {
    const {isAuthenticated} = useAuth();
    console.log("isAuthenticated", isAuthenticated);
    const navigate = useNavigate();
    useLayoutEffect(() => {
            if (isAuthenticated) {
                navigate("/");
            }
        }
        , [isAuthenticated]);

    return children;
}

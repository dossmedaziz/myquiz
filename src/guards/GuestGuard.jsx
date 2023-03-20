import { Navigate, nav } from "react-router-dom";
import { useAuth } from "../context/useAuth";

export default function GuestGuard({ children }) {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
}

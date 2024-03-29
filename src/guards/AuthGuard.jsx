import { Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

export default function AuthGuard({ children }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" />;
  }

  return children;
}

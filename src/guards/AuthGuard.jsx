import { Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

export default function AuthGuard({ children }) {
  const { isAuthenticated } = useAuth();
  console.log("isAuthenticated", isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}

import { Navigate, nav } from "react-router-dom";
import { useAuth } from "../context/useAuth";

export default function GuestGuard({ children }) {
  const { isAuthenticated } = useAuth();
  console.log("isAuthenticated", isAuthenticated);
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
}

import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLogIn } from "../redux/auth/auth-slice";

export default function PrivateRoute({ redirectPath = "/", children }) {
  const isLoggedIn = useSelector(getIsLogIn);
  if (!isLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
}

import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLogIn } from "../redux/auth/auth-slice";

export default function PublicRoute({
  restricted,
  redirectPath = "/",
  children,
}) {
  const isLoggedIn = useSelector(getIsLogIn);
  if (isLoggedIn && restricted) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
}

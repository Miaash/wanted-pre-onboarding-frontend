import { Navigate, Outlet } from "react-router-dom";

const SecurityRoute = () => {
  const isToken = () => !!localStorage.getItem("token");
  return isToken() ? <Outlet /> : <Navigate to="/" />;
};

export default SecurityRoute;

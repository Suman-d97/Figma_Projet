import { Navigate, Outlet } from "react-router-dom";
import { toast } from "sonner";
import { useEffect } from "react";

const Protectedroute = () => {
  const isAuth = localStorage.getItem("loginData");

  useEffect(() => {
    if (!isAuth) {
      toast.error("Please Login to access this page.");
    }
  }, [isAuth]);

  return isAuth ? <Outlet /> : <Navigate to="/" replace />;
};

export default Protectedroute;

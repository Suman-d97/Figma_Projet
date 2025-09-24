import React, { lazy, Suspense } from "react";
// import Navbar from './Navbar'
// import SideBar from './SideBar'
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import DynamicLoading from "../../Components/DynamicLoading";
const Navbar = lazy(() => import("./Navbar"));
const SideBar = lazy(() => import("./SideBar"));

const Wrapper = () => {
  return (
    <Suspense fallback={<DynamicLoading />}>
      <Box>
        <Navbar />
        <Box>
          <Box>
            <SideBar />
          </Box>
          <Box>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Suspense>
  );
};

export default Wrapper;

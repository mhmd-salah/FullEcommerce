import {  Navigate, Outlet } from "react-router-dom";
import NavChakra from "@/Components/NavChakra";

function RootLayout({isAuthenticated}:{isAuthenticated:boolean}) {
  // if(!isAuthenticated) return <Navigate to="/login" replace/>
  console.log(isAuthenticated)
  return (
    <>
      <NavChakra />
      <Outlet />
    </>
  );
}

export default RootLayout
import { Outlet } from "react-router-dom";
import NavChakra from "@/Components/NavChakra";

function RootLayout() {
  return (
    <>
      <NavChakra/>
      <Outlet/>
    </>
  )
}

export default RootLayout
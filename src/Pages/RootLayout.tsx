import { Outlet } from "react-router-dom";
import NavChakra from "@/Components/NavChakra";

function RootLayout() {
  return (
    <>
      {/* <Header/> */}
      <NavChakra/>
      <Outlet/>
    </>
  )
}

export default RootLayout
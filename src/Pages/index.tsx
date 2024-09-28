import Hero from "@/Components/Hero";
import cookieService from "@/services/cookieService";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Navigate } from "react-router-dom";

function HomePage() {
  const token = cookieService.get("jwt");
  if (!token) <Navigate to={"/login"} replace />;
  const ref = useRef(null);
  const isInView = useInView(ref);
  // console.log("the element in view ," + isInView);
  useEffect(() => {}, [isInView]);
  return (
    <>
      <Hero/>
    </>
  );
}

export default HomePage;

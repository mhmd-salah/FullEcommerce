import { NavLink } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const CustomNavLink = ({ to, children }:Record<string,string>) => {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        textDecoration: "none",
        padding: "8px 16px",
        color: isActive ? "white" : "gray",
        backgroundColor: isActive ? "blue.500" : "transparent",
        borderRadius: "md",
      })}
    >
      <Box>{children}</Box>
    </NavLink>
  );
};

export default CustomNavLink;

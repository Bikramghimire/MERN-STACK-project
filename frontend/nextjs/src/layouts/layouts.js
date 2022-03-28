import React from "react";
import { NavBar } from "../navbar/navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar></NavBar>
      <main>{children}</main>
    </div>
  );
};

export default Layout;

import { Outlet, Link } from "react-router-dom";
import UserContext from "./UserContext";
import { useState } from "react";

const Layout = () => {
  const [nota, setNota] = useState("0");
  return (
    <>
      <UserContext.Provider value={{ nota, setNota }}>
        <Outlet />
      </UserContext.Provider>
    </>
  );
};

export default Layout;

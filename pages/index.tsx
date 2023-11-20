import React, { useContext } from "react";
import Registration from "./registration";
import Home from "./home";
import AuthContext from "../context/AuthContext";

export default function Base() {
  const authCtx = useContext(AuthContext);

  return <>{authCtx.isLoggedIn ? <Home /> : <Registration />}</>;
}

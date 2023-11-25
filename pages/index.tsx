import React, { useContext } from "react";
import Registration from "./registration";
import Home from "./home";
import AuthContext from "../context/AuthContext";
import { useGetUserByTokenQuery } from "../graphql/generated";
import Loader from "../components/UI/Loader";

export default function Base() {
  const authCtx = useContext(AuthContext);
  const { data, loading } = useGetUserByTokenQuery({
    variables: { token: authCtx.token },
  });

  const userId = data?.userByToken?.userId;
  authCtx.setUserIdValue(userId);

  return (
    <>
      {loading ? <Loader /> : authCtx.isLoggedIn ? <Home /> : <Registration />}
    </>
  );
}

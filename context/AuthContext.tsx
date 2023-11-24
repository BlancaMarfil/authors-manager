import React, { useState, useEffect } from "react";
import { useGetUserByTokenQuery } from "../graphql/generated";

const AuthContext = React.createContext({
  token: null,
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (token: string) => {},
});

export const AuthContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState<string>();

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("loggedInToken");

    if (storedUserLoggedInInformation !== null) {
      setIsLoggedIn(true);
      setToken(storedUserLoggedInInformation);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("loggedInToken");
    setIsLoggedIn(false);
    setToken(null);
  };

  const loginHandler = (token: string) => {
    localStorage.setItem("loggedInToken", token);
    setIsLoggedIn(true);
    setToken(token);
  };

  return (
    <AuthContext.Provider
      value={{
        token: token,
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

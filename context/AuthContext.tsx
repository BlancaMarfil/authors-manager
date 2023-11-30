import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  userId: null,
  token: null,
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (token: string) => {},
  setUserIdValue: (userId: string) => {},
});

export const AuthContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState<string>();
  const [userId, setUserId] = useState<string>();

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

  const setUserIdValue = (userId: string) => {
    setUserId(userId);
  };

  return (
    <AuthContext.Provider
      value={{
        userId: userId,
        token: token,
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        setUserIdValue: setUserIdValue,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

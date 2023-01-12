import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const context = React.createContext<any>(null!);

const GlobalContexts = ({ children }: any) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")!)
      : null
  );

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/signin");
  };

  return (
    <context.Provider value={{ user, logout, setUser }}>
      {children}
    </context.Provider>
  );
};

export { GlobalContexts };


export const Ctx = () => useContext(context);

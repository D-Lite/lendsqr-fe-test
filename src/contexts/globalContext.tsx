import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const context = React.createContext<any>(null!);

const GlobalProvider = ({ children }: any) => {
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

export { GlobalProvider };


export const Ctx = () => useContext(context);

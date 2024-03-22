import { createContext, useState } from "react";

const Context = createContext({
  currentUser: {},
  setcurrentUser: () => {},
  userToken: "",
  setUserToken: () => {},
});

export function ContextProvider({ children }) {
  const [currentUser, setcurrentUser] = useState({ name: "talha" });
  const [userToken, setUserToken] = useState("23214");
  return (
    <Context.Provider
      value={{
        currentUser,
        setcurrentUser,
        userToken,
        setUserToken,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;

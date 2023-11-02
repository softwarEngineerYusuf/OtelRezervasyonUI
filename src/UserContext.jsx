import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({ name: "" });
  const [userSecondData, setUserSecondData] = useState({ name: "" });
  const [fiyat, setFiyat] = useState(0);

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        userSecondData,
        setUserSecondData,
        fiyat,
        setFiyat,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);

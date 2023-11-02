import React, { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedHotel, setSelectedHotel] = useState("");
  const [maxxPrice, setMaxxPrice] = useState(1000);

  const contextValue = {
    selectedCity,
    setSelectedCity,
    selectedHotel,
    setSelectedHotel,
    maxxPrice,
    setMaxxPrice,
  };

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};

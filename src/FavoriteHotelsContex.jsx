import React, { createContext, useContext, useState } from "react";

const FavoriteHotelsContext = createContext();

export function useFavoriteHotels() {
  return useContext(FavoriteHotelsContext);
}

export function FavoriteHotelsProvider({ children }) {
  const [favoriteHotels, setFavoriteHotels] = useState([]);

  function toggleFavorite(hotel) {
    if (favoriteHotels.includes(hotel)) {
      setFavoriteHotels(
        favoriteHotels.filter((favHotel) => favHotel !== hotel)
      );
    } else {
      setFavoriteHotels([...favoriteHotels, hotel]);
    }
  }

  return (
    <FavoriteHotelsContext.Provider value={{ favoriteHotels, toggleFavorite }}>
      {children}
    </FavoriteHotelsContext.Provider>
  );
}

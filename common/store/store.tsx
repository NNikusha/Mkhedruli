"use client";

import { createContext, useContext, useState } from "react";

interface ContextProps {
  burgerMenuOpen: boolean;
  setBurgerMenuOpen: (modalOpen: boolean) => void;
}

const GlobalContext = createContext<ContextProps>({
  burgerMenuOpen: false,
  setBurgerMenuOpen: (signInmodalOpen: boolean) => {},
});

export const GlobalContextProvider = ({ children }: any) => {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState<boolean>(false);

  return (
    <GlobalContext.Provider value={{ burgerMenuOpen, setBurgerMenuOpen }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

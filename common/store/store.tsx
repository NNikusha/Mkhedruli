"use client";

import { createContext, useContext, useState } from "react";

interface ContextProps {
  burgerMenuOpen: boolean;
  setBurgerMenuOpen: (modalOpen: boolean) => void;
  language: string;
  setLanguage: (language: string) => void;
}

const GlobalContext = createContext<ContextProps>({
  burgerMenuOpen: false,
  setBurgerMenuOpen: (signInmodalOpen: boolean) => {},
  language: "ENG",
  setLanguage: (language: string) => {},
});

export const GlobalContextProvider = ({ children }: any) => {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>("ENG");

  return (
    <GlobalContext.Provider
      value={{ burgerMenuOpen, setBurgerMenuOpen, language, setLanguage }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

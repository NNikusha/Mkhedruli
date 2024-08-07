"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface ContextProps {
  burgerMenuOpen: boolean;
  setBurgerMenuOpen: (modalOpen: boolean) => void;
  language: string;
  setLanguage: (language: string) => void;
}

const GlobalContext = createContext<ContextProps>({
  burgerMenuOpen: false,
  setBurgerMenuOpen: () => {},
  language: "ENG", 
  setLanguage: () => {},
});

export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {

  const [language, setLanguage] = useState<string>(
    () => localStorage.getItem("language") || "ENG"
  );

  const [burgerMenuOpen, setBurgerMenuOpen] = useState<boolean>(false);


  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <GlobalContext.Provider
      value={{ burgerMenuOpen, setBurgerMenuOpen, language, setLanguage }}
    >
      {children}
    </GlobalContext.Provider>
  );
};


export const useGlobalContext = () => useContext(GlobalContext);

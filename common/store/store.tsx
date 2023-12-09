"use client";

import { createContext, useContext, useState } from "react";

interface ContextProps {
  signInmodalOpen: boolean;
  setSignInModalOpen: (modalOpen: boolean) => void;
}

const GlobalContext = createContext<ContextProps>({
  signInmodalOpen: false,
  setSignInModalOpen: (signInmodalOpen: boolean) => {},
});

export const GlobalContextProvider = ({ children }: any) => {
  const [signInmodalOpen, setSignInModalOpen] = useState<boolean>(false);

  return (
    <GlobalContext.Provider value={{ signInmodalOpen, setSignInModalOpen }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

import React, { createContext } from 'react';

type Props = { children: React.ReactNode };

const ModalContextProvider = ({ children }: Props) => {
  const ModalContext = createContext({});
  return <ModalContext.Provider value={{}}>{children}</ModalContext.Provider>;
};

import React, { createContext, useState } from 'react';

type Props = { children: React.ReactNode };

export const ModalContext = createContext({});

export const ModalContextProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ModalContext.Provider value={(isOpen, setIsOpen)}>
      {children}
    </ModalContext.Provider>
  );
};

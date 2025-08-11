import React, { createContext } from 'react';

// Create the context
export const BioContext = createContext();

// Provider component
export const BioProvider = ({ children }) => {
  const myName = "vinod";
  const myAge = 30;

  return (
    <BioContext.Provider value={{ myName, myAge }}>
      {children}
    </BioContext.Provider>
  );
};

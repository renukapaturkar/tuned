import React, { useContext } from "react";
import { createContext, useReducer } from "react";
import { primaryReducer } from "../reducers/primaryReducer";

export const PrimaryContext = createContext();

const initialValue = {
  videos: [],
  playlistModal: false,
};

export const PrimaryProvider = ({ children }) => {
  const [state, primaryDispatch] = useReducer(primaryReducer, initialValue);
  return (
    <PrimaryContext.Provider value={{ ...state, primaryDispatch }}>
      {children}
    </PrimaryContext.Provider>
  );
};

export const usePrimaryContext = () => {
  return useContext(PrimaryContext);
};

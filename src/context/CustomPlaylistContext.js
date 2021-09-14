import { createContext, useContext, useReducer } from "react";
import { playlistReducer } from "../reducers/playlistReducer";

const CustomPlaylistContext = createContext();

const initialValue = {
  watchlaterId: null,
  watchlaterdata: [],
  playlistModal: false,
  playlistData: [],
  createplaylistmodal: false,
  customPlaylistData: [],
};

export const CustomPlaylistProvider = ({ children }) => {
  const [state, PlaylistDispatch] = useReducer(playlistReducer, initialValue);
  return (
    <CustomPlaylistContext.Provider value={{ ...state, PlaylistDispatch }}>
      {children}
    </CustomPlaylistContext.Provider>
  );
};

export const useCustomPlaylistContext = () => {
  return useContext(CustomPlaylistContext);
};

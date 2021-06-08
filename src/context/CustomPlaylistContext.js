import {createContext, useContext, useReducer } from 'react';
import {playlistReducer} from '../reducers/playlistReducer';


const CustomPlaylistContext = createContext();

const initialValue = {
    playlistModal: false,
    playlistData : []
}

export const CustomPlaylistProvider = ({children}) => {
    const [state, PlaylistDispatch] = useReducer(playlistReducer, initialValue);
    return (
        <CustomPlaylistContext.Provider value={{...state, PlaylistDispatch}}>
            {children}
        </CustomPlaylistContext.Provider>
    )
};

export const useCustomPlaylistContext = () => {
    return(
        useContext(CustomPlaylistContext)
    )
}


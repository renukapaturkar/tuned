import React, { useReducer } from 'react';
import {useContext,createContext} from 'react';
import {likeListReducer} from '../reducers/likeListReducer';
const LikedVideoContext = createContext();

const initialValue = {
    likedPlaylistId: null,
    likesvideos: []
}

export const LikeContextProvider = ({children}) => {
    const [state, LikesDispatch] = useReducer(likeListReducer, initialValue)
    return (
        <LikedVideoContext.Provider value={{...state, LikesDispatch}}>
            {children}
        </LikedVideoContext.Provider>
    )
}

export const useLikeContext = () =>{
    return(
        useContext(LikedVideoContext)
    )
}
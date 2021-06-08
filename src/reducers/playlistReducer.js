
export const playlistReducer = (state, action) => {
    switch(action.type) {
        case "SHOW_PLAYLIST_MODAL": 
        return {
            ...state,
            playlistModal : !state.playlistModal
        }

        default: 
        return state;
        
    }
}
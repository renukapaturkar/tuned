export const likeListReducer = (state, action) => {
    switch(action.type) {
        case "FIND_LIKEDPLAYLIST_ID": 
        console.log(action.payload)
            return  {
                ...state,
                likedPlaylistId: action.payload
            }
        
        case "ADD_TO_LIKEDVIDEOS": 
            return {
                ...state, likesvideos: [...action.payload]
            };
        default:
            return state; 
    }
}
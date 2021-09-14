export const likeListReducer = (state, action) => {
  switch (action.type) {
    case "FIND_LIKEDPLAYLIST_ID":
      console.log(action.payload);
      return {
        ...state,
        likedPlaylistId: action.payload,
      };

    case "ADD_TO_LIKEDVIDEOS":
      console.log(action.payload, "likesVideos payload");
      return {
        ...state,
        likesvideos: action.payload,
      };

    case "REMOVE_FROM_LIKEDLIST":
      return {
        ...state,
        likesvideos: state.likesvideos.filter(
          (item) => item._id !== action.payload
        ),
      };
      
    default:
      return state;
  }
};

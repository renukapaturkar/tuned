export const playlistReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_PLAYLIST_MODAL":
      return {
        ...state,
        playlistModal: !state.playlistModal,
      };
    case "SHOW_CREATE_PLAYLIST_MODAL":
      return {
        ...state,
        createplaylistmodal: !state.createplaylistmodal,
      };

    case "FIND_WATCH_LATER_ID":
      console.log(action.payload);
      return {
        ...state,
        watchlaterId: action.payload,
      };

    case "ADD_TO_WATCH_LATER":
      return {
        ...state,
        watchlaterdata: [...action.payload],
      };
    case "REMOVE_FROM_WATCHLATER":
      return {
        ...state,
        watchlaterdata: [...action.payload],
      };

    case "create_new_playlist":
      return {
        ...state, 
        customplaylistdata: [...state.customplaylistdata, {name:action.payload, list: []}]
      }
    default:
      return state;
  }
};

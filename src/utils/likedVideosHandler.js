import { addToLikedVideosPlaylist } from "../api/addToLikedVideosPlaylist";
import { removeFromLikedPlaylist } from "../api/removeFromLikedPlaylist.js";

export const likedVideosHandler = (
  videoDetails,
  likesvideos,
  likedPlaylistId,
  LikesDispatch
) => {
  if (likesvideos.some((video) => video._id === videoDetails._id) === false) {
    addToLikedVideosPlaylist(videoDetails, likedPlaylistId, LikesDispatch);
  } else {
    removeFromLikedPlaylist(videoDetails, likedPlaylistId, LikesDispatch);
  }
};

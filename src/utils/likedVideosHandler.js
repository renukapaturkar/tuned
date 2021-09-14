import { addToLikedVideosPlaylist } from "../api/addToLikedVideosPlaylist";
import { removeFromLikedPlaylist } from "../api/removeFromLikedPlaylist.js";

export const likedVideosHandler = (
  videodetails,
  likesvideos,
  likedPlaylistId,
  LikesDispatch
) => {
  if (likesvideos.some((item) => item._id._id === videodetails._id) === false) {
    addToLikedVideosPlaylist(videodetails, likedPlaylistId, LikesDispatch);
  } else {
    removeFromLikedPlaylist(videodetails, likedPlaylistId, LikesDispatch);
  }
};

import { addToWatchLaterPlaylist } from "../api/addtoWatchLaterPlaylist";
import { removeFromWatchLaterPlaylist } from "../api/removeFromWatchLaterPlaylist.js";

export const watchLaterPlaylistHandler = (
  videodetails,
  watchlaterdata,
  watchlaterId,
  PlaylistDispatch
) => {
  console.log(watchlaterdata, "watchlaterdata")
  if (
    watchlaterdata.some((video) => video._id._id === videodetails._id) === false
  ) {
    addToWatchLaterPlaylist(videodetails, watchlaterId, PlaylistDispatch);
  } else {
    removeFromWatchLaterPlaylist(videodetails, watchlaterId, PlaylistDispatch);
  }
};

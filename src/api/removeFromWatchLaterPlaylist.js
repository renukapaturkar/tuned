import axios from "axios";

export const removeFromWatchLaterPlaylist = async (
  videodetails,
  watchlaterId,
  PlaylistDispatch
) => {
  try {
    const response = await axios.delete(
      `https://think-tunes-server.herokuapp.com/watchlater/${watchlaterId}/${videodetails._id}`,
      { WatchLaterArray: { WatchLaterVideos: videodetails._id } }
    );
    if (response.status === 200) {
      PlaylistDispatch({
        type: "REMOVE_FROM_WATCHLATER",
        payload: response.data.watchlaterdata.watchLaterArray,
      });
    }
  } catch (error) {
    console.log(Error);
  } finally {
    console.log("done!");
  }
};

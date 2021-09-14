import axios from "axios";

export const removeFromWatchLaterPlaylist = async (
  videodetails,
  watchlaterId,
  PlaylistDispatch
) => {
  try {
    const response = await axios.delete(
      `https://tuned-api.renukapaturkar.repl.co/watchlater/${watchlaterId}/${videodetails._id}`,
      { WatchLaterArray: { WatchLaterVideos: videodetails._id } }
    );
    PlaylistDispatch({
      type: "REMOVE_FROM_WATCHLATER",
      payload: response.data.watchlaterdata.watchLaterArray,
    });
  } catch (error) {
    console.log(Error);
  } finally {
    console.log("done!");
  }
};

import axios from "axios";

export const addToWatchLaterPlaylist = async (
  videodetails,
  watchlaterId,
  PlaylistDispatch
) => {
  try {
    if (watchlaterId === null) {
      const response = await axios.post(
        "https://think-tunes-server.herokuapp.com/watchlater",
        {
          WatchLaterArray: { _id: videodetails._id },
        }
      );
      if (response.status === 200) {
        PlaylistDispatch({
          type: "FIND_WATCH_LATER_ID",
          payload: response.data.watchlaterdata._id,
        });
        PlaylistDispatch({
          type: "ADD_TO_WATCH_LATER",
          payload: response.data.watchlaterdata.WatchLaterArray,
        });
      }
    } else {
      const response = await axios.post(
        `https://think-tunes-server.herokuapp.com/watchlater/${watchlaterId}`,
        {
          WatchLaterArray: { _id: videodetails._id },
        }
      );
      if (response.status === 200) {
        PlaylistDispatch({
          type: "ADD_TO_WATCH_LATER",
          payload: response.data.watchlaterdata.watchLaterArray,
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

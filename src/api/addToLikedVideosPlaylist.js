import axios from "axios";

export const addToLikedVideosPlaylist = async (
  videodetails,
  likedPlaylistId,
  LikesDispatch
) => {
  try {
    if (likedPlaylistId === null) {
      const response = await axios.post("http://localhost:3000/likedvideos", {
        LikedVideosArray: {
          _id: videodetails._id,
          LikedVideos: videodetails._id,
        },
      });
      LikesDispatch({
        type: "FIND_LIKEDPLAYLIST_ID",
        payload: response.data.likedVideoData._id,
      });
      LikesDispatch({
        type: "ADD_TO_LIKEDVIDEOS",
        payload: response.data.likedVideoData.LikedVideosArray,
      });
    } else {
      const response = await axios.post(
        `http://localhost:3000/likedvideos/${likedPlaylistId}`,
        {
          LikedVideosArray: {
            _id: videodetails._id,
            LikedVideos: videodetails._id,
          },
        }
      );
      LikesDispatch({
        type: "ADD_TO_LIKEDVIDEOS",
        payload: response.data.likedVideoData.LikedVideosArray,
      });
    }
  } catch (error) {
    console.log(error);
  } finally {
    console.log("liked list is done!");
  }
};

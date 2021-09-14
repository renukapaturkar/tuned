import axios from "axios";

export const addToLikedVideosPlaylist = async (
  videodetails,
  likedPlaylistId,
  LikesDispatch
) => {
  try {
    if (likedPlaylistId === "") {
      const response = await axios.post(
        "https://think-tunes-server.herokuapp.com/likedvideos",
        {
          LikedVideosArray: { _id: videodetails._id },
        }
      );
      if(response.status === 200){
        LikesDispatch({
          type: "FIND_LIKEDPLAYLIST_ID",
          payload: response.data.likedVideoData._id,
        });
        LikesDispatch({
          type: "ADD_TO_LIKEDVIDEOS",
          payload: response?.data.likedVideoData.LikedVideosArray,
        });

      }

    } else {
      console.log(likedPlaylistId, "likedPlaylistId in a  else block ------------------------------------------------------------")

      const response = await axios.post(
        `https://think-tunes-server.herokuapp.com/likedvideos/${likedPlaylistId}`,
        {
          LikedVideosArray: {
            _id: videodetails._id,
          },
        }
      );
        if(response.status === 200){
          LikesDispatch({
            type: "ADD_TO_LIKEDVIDEOS",
            payload: response.data.likedVideoData.LikedVideosArray,
          });
        }

    }
  } catch (error) {
    console.log(error);
  } finally {
    console.log("liked list is done!");
  }
};

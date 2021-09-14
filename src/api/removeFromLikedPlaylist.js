import axios from "axios";

export const removeFromLikedPlaylist = async (
  videodetails,
  likedPlaylistId,
  LikesDispatch
) => {
  try {
    console.log(videodetails, "videodetails")
    console.log(likedPlaylistId, "likedPlaylistId")
    const response = await axios.delete(
      `https://think-tunes-server.herokuapp.com/likedvideos/${likedPlaylistId}/${videodetails._id}`,

      { LikedVideosArray: {_id: videodetails._id } }
    );
    console.log(response, "response to remove from list")
    if(response.status === 200){
      LikesDispatch({
        type: "REMOVE_FROM_LIKEDLIST",
        payload: response.data.likedVideosData.LikedVideosArray,
      });
    }

  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("removed from the liked list ");
  }
};

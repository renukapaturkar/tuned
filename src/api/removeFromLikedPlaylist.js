import axios from "axios";

export const removeFromLikedPlaylist = async (
  videodetails,
  likedPlaylistId,
  LikesDispatch
) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/likedvideos/${likedPlaylistId}/${videodetails._id}`,

      { LikedVideosArray: { LikedVideos: videodetails._id } }
    );
    LikesDispatch({
      type: "REMOVE_FROM_LIKEDLIST",
      payload: response.data.likedVideosData.LikedVideosArray,
    });
  } catch (error) {
    console.log(error);
  } finally {
    console.log("done!");
  }
};

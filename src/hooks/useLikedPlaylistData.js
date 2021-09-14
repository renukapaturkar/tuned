import axios from "axios";
import { useEffect } from "react";
import { useAuth } from "../context/AuthProvider";
import { useLikeContext } from "../context/LikedVideoContext";

export const useLikedPlaylistData = () => {
  const { LikesDispatch, likesvideos } = useLikeContext();
  const { token } = useAuth();
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://think-tunes-server.herokuapp.com/likedvideos"
      );
      if (response.status === 200) {
        LikesDispatch({
          type: "FIND_LIKEDPLAYLIST_ID",
          payload: response.data.likedVideoData._id,
        });
        LikesDispatch({
          type: "ADD_TO_LIKEDVIDEOS",
          payload: response.data.likedVideoData.LikedVideosArray,
        });
      }
    } catch (error) {
      console.log(error, "Something went wrong while fetching data");
    }
  };

  useEffect(() => {
    if (token && likesvideos.length === 0) {
      getData();
    }
  }, [token]);
};

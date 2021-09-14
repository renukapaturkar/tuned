import { useLikeContext } from "../../context/LikedVideoContext";
import "../../css/VideoCard.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const LikedVideos = () => {
  const { likesvideos, LikesDispatch } = useLikeContext();
  console.log(likesvideos);

  const getLikedVideos = async () => {
    try {
      const response = await axios.get(
        "https://tuned-api.renukapaturkar.repl.co/likedvideos"
      );
      console.log(
        response.data.likedVideoData.LikedVideosArray,
        "get liked videos"
      );
      LikesDispatch({
        type: "GET_LIKEDVIDEOS",
        payload: response.data.likedVideoData.LikedVideosArray,
      });
    } catch (error) {
      console.log(error, "Something went wrong while fetching data");
    }
  };
  useEffect(() => {
    getLikedVideos();
  }, []);

  return (
    <div className="flex flex-col w-full items-center">
      <h1 className="p-2 font-semibold">Liked Playlist</h1>
      <div className="bg-gray-200 w-full md:max-w-xl items-center m-2">
        {likesvideos?.map((item) => {
          return (
            <div className="flex w-full flex-wrap md:flex-col">
              <div className="w-full md:max-w-lg h-56 flex justify-start items-center m-1 p-2">
                <Link to={`/${item._id}`}>
                  <div className="w-full md:max-w-lg p-4">
                    <img
                      src={`http://i3.ytimg.com/vi/${item._id.video_id}/maxresdefault.jpg`}
                      alt="img"
                    />
                  </div>
                </Link>

                <div className="flex flex-col md:max-w-md">
                  <h4 className="font-semibold">{item._id.title}</h4>
                  <small>{item._id.category}</small>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LikedVideos;

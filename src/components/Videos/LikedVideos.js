import { useLikeContext } from "../../context/LikedVideoContext";
import { Link } from "react-router-dom";

const LikedVideos = () => {
  const { likesvideos } = useLikeContext();

  return (
    <div className="flex flex-col w-full items-center">
      <h1 className="p-2 font-semibold">Liked Playlist</h1>
      <div className="w-full items-center m-1">
        {likesvideos?.map((item) => {
          return (
            <div className="flex w-full justify-center">
              <div className="w-full md:max-w-2xl h-56 flex justify-start items-center p-1">
                <Link className="w-full items-center" to={`/${item._id._id}`}>
                  <img
                    src={`http://i3.ytimg.com/vi/${item._id.video_id}/maxresdefault.jpg`}
                    alt="img"
                  />
                </Link>
                <div className="flex w-full flex-col p-2">
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

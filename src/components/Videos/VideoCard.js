import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PrimaryContext } from "../../context/PrimaryContext.js";
import { useInitialData } from "../../hooks/videos/useInitialData";

function VideoCard() {
  const { videos } = useContext(PrimaryContext);
  useInitialData();

  return (
    <div className="flex w-full md:flex-wrap justify-center p-4">
      {videos.map((item) => {
        return (
          <div className="flex flex-col w-1/4 space-between p-2 m-2">
            <Link className="w-full items-center" to={`/${item._id}`}>
              <img
                src={`http://i3.ytimg.com/vi/${item.video_id}/maxresdefault.jpg`}
                alt="img"
              />
            </Link>
            <div className="flex flex-col">
              <small className="p-1 text-sm font-italic">{item.category}</small>
              <h1 className="font-semibold text-md">{item.title}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default VideoCard;

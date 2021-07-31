import { Link } from "react-router-dom";
import { useCustomPlaylistContext } from "../../context/CustomPlaylistContext";

const WatchLater = () => {
  const { watchlaterdata } = useCustomPlaylistContext();
  return (
    <div>
      <h1>Liked Playlist</h1>
      <div>
        {watchlaterdata.map((item) => {
          return (
            <div className="card-container">
              <div className="horizontal-card">
                <Link to={`/${item._id}`}>
                  <div class="horizontal-thumbnail-container">
                    <img
                      class="thumbnail"
                      src={`http://i3.ytimg.com/vi/${item.WatchLaterVideos.video_id}/maxresdefault.jpg`}
                      alt="img"
                    />
                  </div>
                </Link>

                <div>
                  <h4>{item.WatchLaterVideos.title}</h4>
                  <div>{item.WatchLaterVideos.category}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WatchLater;

import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCustomPlaylistContext } from "../../context/CustomPlaylistContext";

const WatchLater = () => {
  const { watchlaterdata, PlaylistDispatch } = useCustomPlaylistContext();
  console.log(watchlaterdata, "watchlater Data")


  useEffect(() => {
    (async() => {
      try {
        const response = await axios.get("https://tuned-api.renukapaturkar.repl.co/watchlater")
        console.log(response, "response for get watch later")
        PlaylistDispatch({
          type: "GET_WATCHLATER_DATA", 
          payload: response.data.watchlaterdata.WatchLaterArray
        })
      }catch(error) {
        console.log(error.message)
      }
    })()
  }, [])

  return (
    <div>
      <h1>Watch List</h1>
      <div>
        {watchlaterdata.map((item) => {
          return (
            <div className="flex flex-wrap justify-center">
              <div className="w-3/4 h-56 flex justify-start items-center p-2 m-1">
                <Link to={`/${item._id._id}`}>
                  <div className="h-40 w-64 p-4">
                    <img
                      className="w-full h-full"
                      src={`http://i3.ytimg.com/vi/${item._id.video_id}/maxresdefault.jpg`}
                      alt="img"
                    />
                  </div>
                </Link>

                <div>
                  <h4>{item._id.title}</h4>
                  <div>{item._id.category}</div>
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

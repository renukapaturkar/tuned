import { useCustomPlaylistContext } from "../../context/CustomPlaylistContext.js";
import { CreatePlaylist } from "./CreatePlaylist.js";
import * as AiIcons from "react-icons/ai";

const PlaylistModal = ({ playlistModal }) => {
  const { createplaylistmodal, PlaylistDispatch } = useCustomPlaylistContext();
  return (
    <div
      className={`bg-white w-full md:max-w-lg m-4 absolute right-1/4 bottom-1/4 ${playlistModal ? "opacity-100" : "opacity-0" }`}
      
    >
      <div className="flex p-4 items-center justify-center">
        <h4>Save to</h4>
        <span
          className="bg-gray-300 right-0"
          onClick={() => PlaylistDispatch({ type: "SHOW_PLAYLIST_MODAL" })}
        >
          <AiIcons.AiOutlineClose />
        </span>
      </div>
      <div className="flex p-8 justify-center">
        <button 
        className="block text-sm pointer p-2 bg-gray-300"
          onClick={() =>
            PlaylistDispatch({ type: "SHOW_CREATE_PLAYLIST_MODAL" })
          }
        >
          Create a Playlist
        </button>
        {console.log(createplaylistmodal)}
      </div>
      <div className={`${createplaylistmodal ? "block" : "hidden"}`}>
        <CreatePlaylist />
      </div>
    </div>
  );
};

export default PlaylistModal;

import { useCustomPlaylistContext } from "../../context/CustomPlaylistContext.js";
import { CreatePlaylist } from "./CreatePlaylist.js";
import * as AiIcons from "react-icons/ai";

const PlaylistModal = ({ playlistModal }) => {
  const { createplaylistmodal, PlaylistDispatch } = useCustomPlaylistContext();
  return (
    <div
      className="modal-wrapper"
      style={{ opacity: playlistModal ? "1" : "0" }}
    >
      <div className="modal-header">
        <h4>Save to</h4>
        <span
          className="close-modal-btn"
          onClick={() => PlaylistDispatch({ type: "SHOW_PLAYLIST_MODAL" })}
        >
          <AiIcons.AiOutlineClose />
        </span>
      </div>
      <div className="modal-content">
        <button
          onClick={() =>
            PlaylistDispatch({ type: "SHOW_CREATE_PLAYLIST_MODAL" })
          }
        >
          Create a Playlist
        </button>
        {console.log(createplaylistmodal)}
      </div>
      <div className={`${createplaylistmodal ? "modal-show" : "modal-hide"}`}>
        <CreatePlaylist />
      </div>
    </div>
  );
};

export default PlaylistModal;

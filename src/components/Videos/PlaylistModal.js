import {useCustomPlaylistContext} from '../../context/CustomPlaylistContext.js';
import '../../css/PlaylistModal.css';

const PlaylistModal = ({playlistModal}) => {
    const {PlaylistDispatch} = useCustomPlaylistContext();
    return (
        <div className="modal-wrapper" style={{opacity: playlistModal ? '1': '0'}}>
            <div className="modal-header">
                <p>Save to</p>
                <span className="close-modal-btn" onClick={()=> PlaylistDispatch({type: "SHOW_PLAYLIST_MODAL"})}>x</span>
            </div>
            <div className="modal-content">
                <div className="modal-body">
                    <p>All playlists </p>
                </div>
                <div className="modal-footer">
                    <button classname="btn-create">Create a Playlist</button>
                </div>
            </div>
        </div>
    )
}

export default PlaylistModal;
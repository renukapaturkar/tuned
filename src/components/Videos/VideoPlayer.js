import ReactPlayer from 'react-player';
import {useParams} from 'react-router-dom';
import { useLikeContext } from '../../context/LikedVideoContext';
import '../../css/videoPlayer.css';
import {useVideoDetails} from '../../hooks/videos/useVideoDetails'; 
import {useCustomPlaylistContext} from '../../context/CustomPlaylistContext';
import PlaylistModal from '../custom-playlists/PlaylistModal';
import { likedVideosHandler } from '../../utils/likedVideosHandler';
import { watchLaterPlaylistHandler } from '../../utils/watchLaterPlaylistHandler';


function VideoPlayer () {
    const {likedPlaylistId, likesvideos, LikesDispatch} = useLikeContext();
    const {playlistModal, watchlaterId,watchlaterdata, PlaylistDispatch} = useCustomPlaylistContext();
    const {id} = useParams();
    const videodetails = useVideoDetails(id);
    
    

        return (
            <div>
                {
                    playlistModal ? <div class="back-drop"></div> : null
                }
            <div class="videoplayer-container">
                
                <div class="video-player">
                    <ReactPlayer 
                    width="100%"
                    height="100%"
                    controls
                    playing={true}
                    url={`https://www.youtube.com/watch?v=${videodetails.video_id}`}/>
                </div>
                <div class="videodetails">
                    <div class="video-description">
                        <div>{videodetails.category}</div>
                    <div class="video-title">{videodetails.title}</div>
                    <p>{videodetails.description}</p>
                    </div>
                    <div>
                    <span class="details">
                    <span>
                    <ion-icon class="icon" name="thumbs-up-sharp" onClick={()=> likedVideosHandler(videodetails, likesvideos,likedPlaylistId,LikesDispatch)}></ion-icon>
                    </span>
                    <span>
                    <ion-icon class= "icon" name="time-sharp" onClick={()=>watchLaterPlaylistHandler(videodetails, watchlaterdata,watchlaterId, PlaylistDispatch)}></ion-icon>
                    </span>
                    <span>
                    <ion-icon class="icon" name="list-sharp" onClick={()=>PlaylistDispatch({type: "SHOW_PLAYLIST_MODAL"})}></ion-icon>
                    </span>
                        
                    </span>
                    <PlaylistModal playlistModal={playlistModal}/>


                    
                </div>

            </div>
            
        </div>
        </div>
    )
}

export default VideoPlayer;
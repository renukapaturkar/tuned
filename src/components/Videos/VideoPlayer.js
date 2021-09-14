import ReactPlayer from 'react-player';
import {useParams} from 'react-router-dom';
import { useLikeContext } from '../../context/LikedVideoContext';
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
    console.log(likedPlaylistId, "likedPlaylistId video ");
    console.log(videodetails, "videodetails")

        return (
            <div>
                {
                    playlistModal ? <div class="back-drop"></div> : null
                }
            <div className="p-4 flex flex-col h-screen justify-center font-sans">
                
                <div className="flex w-9/12 h-5/6 self-center">
                    <ReactPlayer 
                    width="100%"
                    height="100%"
                    controls
                    playing={true}
                    url={`https://www.youtube.com/watch?v=${videodetails.video_id}`}/>
                </div>
                <div className="flex w-9/12 h-auto self-center m-2">
                    
                        <div className="p-4 w-4/5 h-auto bg-gray-200">
                        <div className="p-2 text-lg font-semibold">{videodetails.category}</div>
                    <div className="p-2 text-2xl font-bold">{videodetails.title}</div>
                    <p className="p-2 text-base font-normal">{videodetails.description}</p>

                        </div>

                    
                    <div className="w-1/5 p-4 h-auto bg-gray-200 justify-center">
                    
                    <span className="w-96 h-96 text-4xl p-3 font-semibold">
                    <ion-icon name="heart-outline" onClick={()=> likedVideosHandler(videodetails, likesvideos,likedPlaylistId,LikesDispatch)}></ion-icon>
                    </span>
                    <span className="w-96 h-96 text-4xl p-3 font-semibold">
                    <ion-icon name="time-outline" onClick={()=>watchLaterPlaylistHandler(videodetails, watchlaterdata,watchlaterId, PlaylistDispatch)}></ion-icon>
                    </span>
                    <span className="w-96 h-96 text-4xl p-3 font-semibold">
                    <ion-icon name="list-outline"  onClick={()=>PlaylistDispatch({type: "SHOW_PLAYLIST_MODAL"})}></ion-icon>
                    </span>
                        
                    <PlaylistModal playlistModal={playlistModal}/>


                    
                </div>
            

            </div>
            
        </div>
        </div>
    )
}

export default VideoPlayer;
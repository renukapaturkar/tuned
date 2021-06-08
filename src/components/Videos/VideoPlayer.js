import ReactPlayer from 'react-player';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { useLikeContext } from '../../context/LikedVideoContext';
import '../../css/videoPlayer.css';
import {useVideoDetails} from '../../hooks/videos/useVideoDetails'; 
import {useCustomPlaylistContext} from '../../context/CustomPlaylistContext';
import PlaylistModal from './PlaylistModal.js';
 


function VideoPlayer () {
    const {likedPlaylistId, LikesDispatch} = useLikeContext();
    const {playlistModal, PlaylistDispatch} = useCustomPlaylistContext();
    const {id} = useParams();
    const videodetails = useVideoDetails(id);
    
    

    
    const addToLikedVideosPlaylist = async(videodetails,likedPlaylistId, LikesDispatch) => {
        console.log("line 16", likedPlaylistId)
        if(likedPlaylistId === null){
            const response = await axios.post('http://localhost:3000/likedvideos', 
            {
                LikedVideosArray: { _id: videodetails._id, LikedVideos: videodetails._id}
            });
            LikesDispatch({type: "FIND_LIKEDPLAYLIST_ID", payload: response.data.likedVideoData._id})
            console.log(response.data.likedVideoData._id)
            LikesDispatch({type: "ADD_TO_LIKEDVIDEOS", payload: response.data.likedVideoData.LikedVideosArray })
        
        }else {

            const response = await axios.post(`http://localhost:3000/likedvideos/${likedPlaylistId}`,
            {
                LikedVideosArray: { _id: videodetails._id, LikedVideos: videodetails._id}
            })
            LikesDispatch({type: "ADD_TO_LIKEDVIDEOS", payload: response.data.likedVideoData.LikedVideosArray })
        }
    }






    return (
            <div>
                {/* {
                    playlistModal ? <div  class="back-drop"></div> : null
                } */}
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
                    <ion-icon class="icon" name="thumbs-up-sharp" onClick={()=> addToLikedVideosPlaylist(videodetails, likedPlaylistId, LikesDispatch)}></ion-icon>
                    </span>
                    <span>
                    <ion-icon class= "icon" name="time-sharp"></ion-icon>
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
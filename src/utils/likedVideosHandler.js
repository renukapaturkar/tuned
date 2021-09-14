import { addToLikedVideosPlaylist } from "../api/addToLikedVideosPlaylist";
import { removeFromLikedPlaylist } from "../api/removeFromLikedPlaylist.js";

export const likedVideosHandler = (videodetails, likesvideos,likedPlaylistId,LikesDispatch) => {
  console.log(videodetails, "videodetails")
  console.log(likesvideos, "likesvideos")
  console.log("----------------------------------", likedPlaylistId)
  if(likesvideos.some((item) =>item._id._id === videodetails._id) === false){
    console.log("add block")
    addToLikedVideosPlaylist(videodetails, likedPlaylistId, LikesDispatch)
    
    console.log("This is working!")
  }else {
    console.log("remove block")
    removeFromLikedPlaylist(videodetails, likedPlaylistId, LikesDispatch)
  }
 
  
}

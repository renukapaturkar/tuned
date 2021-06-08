import { useLikeContext } from "../../context/LikedVideoContext";
import '../../css/VideoCard.css';
import {Link} from 'react-router-dom';



const LikedVideos = () => {
    const {likesvideos} = useLikeContext();
    console.log(likesvideos)
    return (
        <div>
            <h1>Liked Playlist</h1>
            <div>
                {
                    likesvideos.map((item)=> {
                        return(
                            <div className="card-container">

                            <div className="horizontal-card">
                            <Link to={`/${item._id}`}>
                               <div class="horizontal-thumbnail-container">
                                   


                                   <img class="thumbnail" src={`http://i3.ytimg.com/vi/${item.LikedVideos.video_id}/maxresdefault.jpg` } alt="img"/>
 

                               </div>
                               </Link>

                               <div>
                                    <h4>{item.LikedVideos.title}</h4>
                                    <div>{item.LikedVideos.category}</div>

                                   </div>
                                
                                </div>
                                </div>
                        )
                    })
                }
            </div>
            
        </div>
    )
}


export default LikedVideos;
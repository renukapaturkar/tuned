import React, { useContext } from 'react';
import '../../css/VideoCard.css';
import {Link} from 'react-router-dom';
import {PrimaryContext} from '../../context/PrimaryContext.js';
import { useInitialData } from '../../hooks/videos/useInitialData';


function VideoCard() {
    const {videos} = useContext(PrimaryContext);
    useInitialData();
    return(
        <div class="card-container">
            {
                videos.map((item)=> {
                    return (
                        <div class="card" >
                            
                           <Link to={`/${item._id}`}> 
                           <div class="thumbnail-container">
                            <img class="thumbnail" src={`http://i3.ytimg.com/vi/${item.video_id}/maxresdefault.jpg` } alt="img"/>
                                </div>
                                </Link>
                            <small>{item.category}</small>
                            <h4>{item.title}</h4>
                            <p class="video-desc">{item.description}</p>
                            
                            </div>

                    )
                })
            }
        </div>
    )
}

export default VideoCard;
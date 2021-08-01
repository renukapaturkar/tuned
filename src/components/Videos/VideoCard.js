import React, { useContext, useEffect } from 'react';
import '../../css/VideoCard.css';
import {Link} from 'react-router-dom';
import {PrimaryContext} from '../../context/PrimaryContext.js';
import axios from 'axios';
import {useInitialData} from '../../hooks/videos/useInitialData';



function VideoCard() {
    const {videos} = useContext(PrimaryContext);
    useInitialData();
    
    return(
        <div className="flex flex-wrap justify-center p-4 m-2">
            {
                videos.map((item)=> {
                    
                    return (
                        <div className="flex flex-col w-4/12 h-96 border-none p-2 m-4">
                           <Link to={`/${item._id}`}> 
                           <div className="w-10/12 h-72 justify-center">
                            <img className="w-full h-full" src={`http://i3.ytimg.com/vi/${item.video_id}/maxresdefault.jpg` } alt="img"/>
                                </div>
                                </Link>
                            <small className=" p-2 text-sm font-italic">{item.category}</small>
                            <div className="font-semibold text-lg" >{item.title}</div>
    
                            
                            </div>

                    )
                })
            }
        </div>
    )
}

export default VideoCard;
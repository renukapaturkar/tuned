import React, { useContext, useEffect } from 'react';
import '../../css/VideoCard.css';
import {Link} from 'react-router-dom';
import {PrimaryContext} from '../../context/PrimaryContext.js';
import {useInitialData} from '../../hooks/videos/useInitialData';



function VideoCard() {
    const {videos} = useContext(PrimaryContext);
    useInitialData();
    
    return(
        <div className="flex flex-wrap justify-center p-4 m-2">
            {
                videos.map((item)=> {
                    
                    return (
                        <div className="flex flex-col w-1/4 border-none space-between px-2">
                           <Link className="w-full items-center" to={`/${item._id}`}> 
                            <img src={`http://i3.ytimg.com/vi/${item.video_id}/maxresdefault.jpg` } alt="img"/>
                            </Link>
                                <div className="flex flex-col ">
                                <small className=" p-2 text-sm font-italic">{item.category}</small>
                            <div className="font-semibold text-lg" >{item.title}</div>
                                    
                        </div>
                                </div>

                    )
                })
            }
        </div>
    )
}

export default VideoCard;
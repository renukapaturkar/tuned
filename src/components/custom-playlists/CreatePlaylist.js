import React, { useState } from 'react'; 
import { useCustomPlaylistContext } from '../../context/CustomPlaylistContext';
import '../../css/PlaylistModal.css';


export const CreatePlaylist = ({createplaylistmodal}) => {
    const [text, setText] = useState("");
    const [newPlaylist, setNewPlaylist] = useState([]);
    const { PlaylistDispatch} = useCustomPlaylistContext();
    const onChangeHandler = (e) => {
        setText(e.target.value)
    }

    const createNewPlaylistHandler = () => {
        setNewPlaylist([
            ...newPlaylist, {name: text, list: []}
        ])
    }

    //dispatch({type: "create_new_playlist", payload: name})

    const playlistHandler = (e) => {
        console.log(e.target.checked)
    }
    
    
    return(
        <div>
            <span>
                <input className="input" placeholder="Enter Playlist Name" type="text" onChange={onChangeHandler}/>
                <button className="btn-create" onClick={()=>createNewPlaylistHandler()}>Create</button>
            </span>
            
            <div className="modal-body">
            {
                newPlaylist.map((item)=> (
                    <div>
                    <input type="checkbox" onChange={(e)=>playlistHandler(e)}/>
                    <span>{item.name}</span>
                    </div>
                    
    ))
            } 

            </div>




        </div>
    )
}
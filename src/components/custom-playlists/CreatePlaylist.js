// import React, { useState } from "react";
// import { useCustomPlaylistContext } from "../../context/CustomPlaylistContext";

// export const CreatePlaylist = ({ createplaylistmodal }) => {
//   const [text, setText] = useState("");
//   const { PlaylistDispatch, playlists} = useCustomPlaylistContext();
//   const onChangeHandler = (e) => {
//     setText(e.target.value);
//   };

//   const handleOnclick = () => {
//     PlaylistDispatch({ type: "DISPLAY_INPUT_BOX" });
//     text !== "" && createPlaylist(PlaylistDispatch, text);
//     setText("");
//   }

//   return (
//     <div className="flex flex-col m-4">
//       <span>
//         <input
//           className="p-2 m-4 border-black outline-black"
//           placeholder="Enter Playlist Name"
//           type="text"
//           onChange={(e)=> setText(e.target.value)}
//         />
//         <button
//           className="p-2 bg-gray-300 border"
          
//           onClick={handleOnClick}
//         >
//           Create
//         </button>
//       </span>

//       <div className="bg-gray-300 p-2">
//         {playlists.map((item) => (
//           <div className="p-1">
//             <input type="checkbox" onChange={(e) => playlistHandler(e)} />
//             <span>{item.name}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

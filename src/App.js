import "./App.css";
import NavBar from "./components/NavBar";
import VideoListing from "./components/Videos/VideoListing.js";
import { Routes, Route } from "react-router-dom";
import VideoPlayer from "./components/Videos/VideoPlayer.js";
import LikedVideos from "./components/Videos/LikedVideos.js";
import WatchLater from "./components/Videos/WatchLater";
import AllPlaylists from "./components/Videos/AllPlaylists";
import { Login } from "./components/auth/Login";
import { Signup } from "./components/auth/Signup";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { UserProfile } from "./components/auth/UserProfile";

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<VideoListing />} />
        <Route path=":id" element={<VideoPlayer />} />
        <Route path="/likedvideos" element={<LikedVideos />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <PrivateRoute path="/allplaylists" element={<AllPlaylists />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <PrivateRoute path="/userprofile" element={<UserProfile/>} />
      </Routes>
    </div>
  );
}

export default App;

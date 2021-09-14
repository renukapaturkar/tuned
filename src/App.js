import NavBar from "./components/NavBar";
import VideoListing from "./components/Videos/VideoListing.js";
import { Routes, Route } from "react-router-dom";
import VideoPlayer from "./components/Videos/VideoPlayer.js";
import LikedVideos from "./components/Videos/LikedVideos.js";
import WatchLater from "./components/Videos/WatchLater";
import { Login } from "./components/auth/Login";
import { Signup } from "./components/auth/Signup";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { UserProfile } from "./components/auth/UserProfile";
import { useInitialData } from "./hooks/videos/useInitialData";
import { useLikedPlaylistData } from "./hooks/useLikedPlaylistData";
import { useWatchlistData } from "./hooks/useWatchlistData";
import { useVideoDetails } from "./hooks/videos/useVideoDetails";

function App() {
  useInitialData();
  useVideoDetails();
  useLikedPlaylistData();
  useWatchlistData();
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<VideoListing />} />
        <Route path=":id" element={<VideoPlayer />} />
        <PrivateRoute path="/likedvideos" element={<LikedVideos />} />
        <PrivateRoute path="/watchlater" element={<WatchLater />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <PrivateRoute path="/userprofile" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;

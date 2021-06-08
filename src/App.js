
import './App.css';
import NavBar from './components/NavBar';    
import VideoListing from './components/Videos/VideoListing.js';
import {Routes, Route} from 'react-router-dom';
import VideoPlayer from './components/Videos/VideoPlayer.js'
import LikedVideos from './components/Videos/LikedVideos.js'
import WatchLater from './components/Videos/WatchLater';
import AllPlaylists from './components/Videos/AllPlaylists';
import AsideContainer from './components/sidebar/AsideContainer';


function App() {
  return (
    <div>

      <NavBar/>




      <Routes>
          <Route path='/' element={<VideoListing/>}/>
          <Route path=':id' element={<VideoPlayer/>}/>
          <Route path='/likedvideos' element={<LikedVideos/>}/>
          <Route path='/watchlater' element={<WatchLater/>}/>
          <Route path='/allplaylists' element={<AllPlaylists/>}/>
        </Routes>
        




      </div>

  );
}

export default App;

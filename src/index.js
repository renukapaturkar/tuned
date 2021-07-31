import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { LikeContextProvider } from './context/LikedVideoContext';
import { PrimaryProvider } from './context/PrimaryContext';
import { CustomPlaylistProvider } from './context/CustomPlaylistContext';
import { AuthProvider } from './context/AuthProvider';



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <PrimaryProvider>
          <CustomPlaylistProvider>
            <LikeContextProvider>
              <App/>
            </LikeContextProvider>
          </CustomPlaylistProvider>
        </PrimaryProvider>
      </AuthProvider>
    </Router>
 
  </React.StrictMode>,
  document.getElementById('root')
);


import React from 'react';
import './App.css';
import CameraFeed from './components/CameraFeed';
import Sidebar from './components/Sidebar';
import PlaybackControls from './components/PlaybackControls';


function App() {
  return (
    <div className="app">
      <div className="main-content">
        <div className="video-grid">
          <CameraFeed id="D1 IPC" />
          <CameraFeed id="D2 IPC" />
          <CameraFeed id="D3 IPC" />
          <CameraFeed id="D4 Channel4" />
        </div>
        <PlaybackControls />
      </div>
      <Sidebar />
    </div>
  );
}

export default App;

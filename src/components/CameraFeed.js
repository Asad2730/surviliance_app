import React from 'react';
import './CameraFeed.css';

function CameraFeed({ id }) {
  return (
    <div className="camera-feed">
      <div className="camera-id">{id}</div>
      {/* Placeholder for video feed */}
      <div className="video-placeholder">Video Feed</div>
    </div>
  );
}

export default CameraFeed;

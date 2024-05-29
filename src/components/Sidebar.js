import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="calendar">
        <h3>May 2024</h3>
        {/* Calendar placeholder */}
        <div className="calendar-grid">Calendar</div>
      </div>
      <div className="camera-list">
        <h3>Camera Name</h3>
        <ul>
          <li>D1 IPC</li>
          <li>D2 IPC</li>
          <li>D3 IPC</li>
          <li>D4 Channel4</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

import React from 'react'
import "./Homepage.css";
import Sidebar from './Sidebar';
import Timeline from './Timeline';

function Hompage() {
  return (
    <div className="homepage">
        <div className="homepage_bar">
            <Sidebar/>
        </div>
        <div className="homepage_timeline">
            <Timeline/>
        </div>
    </div>
  )
}

export default Hompage
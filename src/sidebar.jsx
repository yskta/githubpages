//export default Sidebar;
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <h2><Link to="/home">Home</Link></h2>
        <h2><Link to="/profile">Profile</Link></h2>
        <h2><Link to="/article">Article</Link></h2>
    </div>
  );
}

export default Sidebar;
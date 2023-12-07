import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import Sidebar from './sidebar';
import Profile from './profile';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            {/* 他のルートをここに追加 */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

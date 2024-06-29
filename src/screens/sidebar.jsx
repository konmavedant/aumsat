import React from 'react';
import { Home as HomeIcon, Settings, User, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="logo">Aumsat Technologies</div>
            <nav>
                <ul>
                    <li className="sidebar-item">
                        <HomeIcon /> <span>Home</span>
                    </li>
                    <li className="sidebar-item">
                        <User /> <span>Profile</span>
                    </li>
                    <li className="sidebar-item">
                        <Settings /> <span>Settings</span>
                    </li>
                </ul>
            </nav>
            <div className='logout'>
              <Link to="/login" className="logout-button">
                    <LogOut /> <span>Logout</span>
              </Link>
            </div>
        </aside>
    );
};

export default Sidebar;

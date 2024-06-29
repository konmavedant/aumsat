import React from 'react';
import Sidebar from './sidebar';
import './home.css';
import MapComponent from './MapComponent';

const Home = () => {
    return (
        <div className="home-page">
            <Sidebar />
            <div className="home-container">
                <div className="container">
                  <MapComponent />
                </div>
            </div>
        </div>
    );
};

export default Home;

import React from 'react';
import Header from '../../Components/Banner/Banner';
import Posts from '../../Components/Posts/Posts';
import Sidebar from '../../Components/Sidebar/Sidebar';

import './home.css';

const Home = () => {
    return (
        <div >
            {/* <Header></Header> */}
            <div className="home">
                <Posts></Posts>
                <Sidebar></Sidebar>
            </div>
        </div>
    );
};

export default Home;
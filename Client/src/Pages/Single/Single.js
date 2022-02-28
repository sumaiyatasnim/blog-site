import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import SinglePost from '../../Components/SinglePost/SinglePost';
import './single.css';

const Single = () => {
    return (
        <div className='single'>
            <SinglePost></SinglePost>
            <Sidebar></Sidebar>
        </div>
    );
};

export default Single;
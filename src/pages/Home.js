import React from 'react';
import FlotCard from '../components/FlotCard';
import Nav from '../components/Nav';
import ReactPost from './ReactPost';

const Home = () => {
    return (
        <div>
            <Nav />
            <ReactPost />
            <FlotCard />
        </div>
    );
};

export default Home;
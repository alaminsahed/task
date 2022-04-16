import React from 'react';
import FlotCard from '../components/FlotCard';
import Nav from '../components/Nav';

const Home = () => {
    return (
        <div>
            <header className='sticky'>
                <Nav />
            </header>
            <FlotCard />
        </div>
    );
};

export default Home;
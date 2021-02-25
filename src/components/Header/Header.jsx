import React from 'react';
import Hero from './Hero/Hero';
import Navbar from './Navbar/Navbar'

const Header = () => {
    return (
        <div>
            <Navbar />
            <Hero />   
        </div>
    );
};

export default Header;
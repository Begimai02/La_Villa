import React from 'react';
import { ToastContainer } from 'react-toastify';
import MainList from '../Body/MainCards/MainList';
import FooterNew from '../Footer/FooterNew';
import Header from '../Header/Header';
import Slider from '../MainBox/Slider';
import Offers from '../MainBox/Offers';
import Hero from '../Header/Hero/Hero';

const Mainbox = () => {
    return (
        <div className="Mainbox">
            <ToastContainer />
            <Hero/>
            <MainList />
            <Offers />
        </div>
    );
};

export default Mainbox;
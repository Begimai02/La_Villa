import React from 'react';
import { ToastContainer } from 'react-toastify';
import MainList from '../Body/MainCards/MainList';
import FooterNew from '../Footer/FooterNew';
import Header from '../Header/Header';
import SearchSection from '../MainBox/SearchSection';
import Slider from '../MainBox/Slider';
import AboutUs from '../MainBox/About';
import Gallery from '../MainBox/Gallery'
import Offers from '../MainBox/Offers';
import Hero from '../Header/Hero/Hero';

const Mainbox = () => {
    return (
        <div className="Mainbox">
            <ToastContainer />
            <Hero/>
            {/* <SearchSection/> */}

            <MainList />
            <Offers />
            <Gallery />
            <AboutUs />
           {/* <FooterNew /> */}
             
        </div >
    );
};

export default Mainbox;
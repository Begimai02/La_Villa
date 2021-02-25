import React from 'react';
import { ToastContainer } from 'react-toastify';
import MainList from '../Body/MainCards/MainList';
import FooterNew from '../Footer/FooterNew';
import Header from '../Header/Header';
import SearchSection from '../MainBox/SearchSection';
import Slider from '../MainBox/Slider';
import Footer from '../Footer/Footer';
import AboutUs from '../MainBox/About';
import Gallery from '../MainBox/Gallery'
import Offers from '../MainBox/Offers';

const Mainbox = () => {
    return (
        <div className="Mainbox">
            <ToastContainer />
            {/* <Header /> */}
            {/* <SearchSection/> */}

            <MainList />
            {/* <Offers /> */}
            {/* <Gallery /> */}
            {/* <AboutUs /> */}
           {/* <FooterNew /> */}
             
        </div >
    );
};

export default Mainbox;
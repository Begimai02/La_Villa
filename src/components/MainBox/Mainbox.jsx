import React from 'react';
import { ToastContainer } from 'react-toastify';
import MainList from '../Body/MainCards/MainList';
import FooterNew from '../Footer/FooterNew';
import Header from '../Header/Header';
import SearchSection from '../MainBox/SearchSection';
import Slider from '../MainBox/Slider';
const Mainbox = () => {
    return (
        <div className="Mainbox">
            <ToastContainer />
            <Header />
            {/* <SearchSection/> */}

            <MainList />
            <FooterNew />

        </div >
    );
};

export default Mainbox;
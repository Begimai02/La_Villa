import React from 'react';
import Header from '../Header/Header';
import SearchSection from '../MainBox/SearchSection';
import About from '../MainBox/About';
import Offers from './Offers';


const Mainbox = () => {
    return (
        <div className="Mainbox">
           <Header />
            <SearchSection/>
            {/* <About/> */}
            <Offers/>

        </div>
    );
};

export default Mainbox;
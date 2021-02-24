import React from 'react';
import MainList from '../Body/MainCards/MainList';
import Header from '../Header/Header';
import SearchSection from '../MainBox/SearchSection';
import Slider from '../MainBox/Slider';
const Mainbox = () => {
  return (
        <div className="Mainbox">
           <Header />
            <SearchSection/>
       
            <MainList />
            <div style={{height: 500, width: 500}}> 
            </div>
             
        </div >
    );
};

export default Mainbox;
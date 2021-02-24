import React from 'react';
import MainList from '../Body/MainCards/MainList';
import Header from '../Header/Header';
import SearchSection from '../MainBox/SearchSection';

const Mainbox = () => {
    return (
        <div className="Mainbox">
           <Header />
            <SearchSection>
            
            </SearchSection>
            <MainList />
            <div style={{height: 500, width: 500}}> 
            </div>
        </div>
    );
};

export default Mainbox;
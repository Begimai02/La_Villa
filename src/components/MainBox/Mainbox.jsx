import React from 'react';
import Header from '../Header/Header';
import SearchSection from '../MainBox/SearchSection';

const Mainbox = () => {
    return (
        <div className="Mainbox">
           <Header />
            <SearchSection>
            
            </SearchSection>
            <div style={{height: 500, width: 500}}> 
            </div>
        </div>
    );
};

export default Mainbox;
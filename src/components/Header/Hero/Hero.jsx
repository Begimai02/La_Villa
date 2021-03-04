import React from 'react';
import briliant1 from '../../../assets/briliant1.mp4'
import classes from './Hero.module.css';

const Hero = () => {
    return (
        <div className={classes.hero_container}>
            <video
                className={classes.hero_video}
                autoPlay
                loop
                muted
            >
                <source 
                    src={briliant1}
                    type="video/mp4"
                />
            </video>
            
        </div>
    );
};

export default Hero;
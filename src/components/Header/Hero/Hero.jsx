import React from 'react';
import heroVideo from '../../../assets/heroVideo.mp4'
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
                    src={heroVideo}
                    type="video/mp4"
                />
            </video>
            
        </div>
    );
};

export default Hero;
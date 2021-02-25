import React from 'react';
import Flip from 'react-reveal/Flip';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Slide from 'react-reveal/Slide';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
    // background: 'linear-gradient(to right, #c9d6ff, #e2e2e2)',
  },
});

const About = () => {
  return (
    <div className="revies">
      <div className="about-container1"
        style={{ 
          maxWidth: '1200px', 
          display: 'flex', 
          margin: "0  auto", 
          width: "100%", 
          alignContent: 'space-between !important', 
          justifyContent: 'space-between !important' }}>
        <Slide left>

          <div className="img_about" style={{margin: '30px'}} >
            <img style={{ 
              width: '600px', 
              height: '400px', 
              borderRadius: '20px',
              boxShadow: '0 0 10px rgba(0,0,0,0.5)',
              }} 
              src="https://www.myistria.com/UserDocsImages/app/objekti/795/slika_hd/19082020034916_Villas-near-Rovinj-Villa-Prestige-2.jpg?preset=carousel-1-webp" alt=""></img>
          </div>
        </Slide>
        <div className="title_offers" >
          <h2>Guest reviews</h2>
          <p>Away from the chaos and in the lap of nature lies Vedatmana By The Waves.
          Perfectly encapsulating a sense of comfort and luxury, Vedatmana lulls you into quietude
          and utmost relaxation. As the name gives it away, the inspiration for this property
          are the sonorous ocean waves and the white and blues of it come from that very inspiration.
          The Villa lies close to the beach offering not only splendid views but a constant music of the waves. This 6 room villa comes equipped with a swimming pool that not only offers certainly picturesque views but is located right next to the bar. So whether you want to take in the sunset by the pool with a martini in your hand or have a pool party, the arena provides all that for you.</p>
        </div>
      </div>
      <div className="about-container2" style={{
        maxWidth:'1200px', 
        display: 'flex', 
        margin: "0  auto", 
        width: "100%", 
        alignContent: 'space-between !important', 
        justifyContent: 'space-between !important' }}>
        <div className="title_offers" >
          <h2>Hamilton Villa</h2>
          <p>Built in local stone, Villa Evangelos preserves its local identity and authentic charm while offering a cocooning escape with all the comforts and conveniences of the modern era. Spacious, airy and in line with the general spirit of minimalism, Villa Evangelos welcomes guests to surrender to all pleasures of luxury while enjoying their privacy, bask in the sun on a lounger by the private pool, enjoy a refreshing swim or dine alfresco while taking in the unobstructed sea and mountain view. the villa can confortably host 6 persons, plus 2 in sofa beds. Convenient also for persοns with mobility restrictions (please ask for details)</p>
        </div>
        <Slide right>
          <div className="img_about" style={{padding: '20px'}}>
            <img style={{ 
                width: '600px', 
                height: '400px', 
                borderRadius: '20px', 
                marginLeft: "20px",
                boxShadow: '0 0 10px rgba(0,0,0,0.5)',
                
            }} 
                src="https://avatars.mds.yandex.net/get-altay/1881714/2a00000169bbf7afb3f9179e6c6f1b83d6b1/XXL" alt=""></img>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default About;
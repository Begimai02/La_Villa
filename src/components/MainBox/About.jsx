import React from 'react';
import Flip from 'react-reveal/Flip';

const About = () => {
    return (
        <div className="offers">
            <div className="container" 
                style={{maxWidth: '1200px', display: 'flex', margin: "0  auto", width: "100%", alignContent: 'space-between !important',justifyContent: 'space-between !important' }}>
                <Flip right>

                <div className="img_about" >
                    <img style={{ width: '600px', height: '400px'}} src="https://www.myistria.com/UserDocsImages/app/objekti/795/slika_hd/19082020034916_Villas-near-Rovinj-Villa-Prestige-2.jpg?preset=carousel-1-webp" alt=""></img>
                </div>
                </Flip>
                <div className="title_offers" >
                    <h2>Marina Villa</h2>
                    <p>Away from the chaos and in the lap of nature lies Vedatmana By The Waves. 
                    Perfectly encapsulating a sense of comfort and luxury, Vedatmana lulls you into quietude 
                    and utmost relaxation. As the name gives it away, the inspiration for this property 
                    are the sonorous ocean waves and the white and blues of it come from that very inspiration. 
                    The Villa lies close to the beach offering not only splendid views but a constant music of the waves. This 6 room villa comes equipped with a swimming pool that not only offers certainly picturesque views but is located right next to the bar. So whether you want to take in the sunset by the pool with a martini in your hand or have a pool party, the arena provides all that for you.</p>
                </div>
            </div>
        </div>
    );
};

export default About;
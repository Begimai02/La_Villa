import React from 'react';
import Flip from 'react-reveal/Flip';
import { makeStyles } from '@material-ui/core/styles';
import './Gallery.css'


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
    <div>
      <div className="revies">
          <div className="about1">
            <Flip right>
              <div className="img_about" style={{ margin: '30px', maxWidth: '500px'}} >
                <img style={{
                  maxWidth: '500px',
                  height: '500px',
                  borderRadius: '20px',
                  boxShadow: '0 0 10px rgba(0,0,0,0.5)',
                }}
                  src="https://www.prestigevillarental.com/child/assets/img/bienvenido.jpg" alt=""></img>
              </div>
            </Flip>
            <div className="title_offers" style={{ fontSize: '20px', fontFamily: 'Butler, san-serif'}}>
              <h2>Why La Villa?</h2>

              <div style={{ 
                maxWidth: '600px', 
                textAlign: 'left' }}>
                <p>La Villa is a real estate agency specializing in the vacation rental of mid and high-end
                villas and also real estate transaction. The team, with more than 10 years of experience in tourism and real estate, has selected for you the best vacation rentals in the
                French Caribbean (luxury villas in Guadeloupe, luxury villas in St. Barth, luxury villas in St.
                Each of the properties with swimming pool, sea view villas and luxury apartments have been inspected: the assurance for you to book with confidence.
            </p>

                <p>
                  Our mission is to assist you in the rental of a villa through a secure ranked website, a secure online payment solution, a 24/7 concierge
                  service assistance and available travel cancellation insurance.
                  Whatever the purpose of your trip, we can offer family vacation homes, villas for your wedding or
                  honeymoon, villas close to golf, houses with swimming pool, villas with sea view or villas
                  with tennis court ... Choose and let us advise you the best to you!
            </p>
              </div>
            </div>
          </div>

      </div>
    </div>
  );
};

export default About;
import React from 'react';
import './Footer.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="newsLatter">
          <div className="newsText">
            <h2>GET NEWS FROM US</h2>
          </div>
            <input type="text"/>
            <button className="newsBtn">LET'S GET IT</button>
        </div>
        <div className="wrapper">
          <div className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, id expedita et mollitia ab reiciendis asperiores? Labore corporis, nulla quae suscipit ipsum iste aperiam praesentium, dolor voluptatibus cumque reprehenderit a!</div>
          <div className="lineOne">
            <ul>
              <li>Lavilla</li>
              <li>About us</li>
              <li>Our Villas</li>
              <li>Offer</li>
            </ul>
            </div>
          <div className="lineTwo"></div>

        </div>
        <div className="icons">
          <InstagramIcon />
          <FacebookIcon />
          <TwitterIcon />
          <MailOutlineIcon />
          <LinkedInIcon />
        </div>
      </div>
    </div>
  );
};

export default Footer;


// Home</li>
//                   <li style={{ marginLeft: '15px', fontSize: '20px' }}>Lavilla</li>
//                   <li style={{ marginLeft: '15px', fontSize: '20px' }}>About us</li>
//                   <li style={{ marginLeft: '15px', fontSize: '20px' }}>Contacts</li>
//                   <li style={{ marginLeft: '15px', fontSize: '20px' }}>Bokonbaevo st., Kyrgyzstan, Registered in Bishkek no: 16720700</li>
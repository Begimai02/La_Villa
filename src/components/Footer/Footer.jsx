import React from 'react';
import './Footer.css'
import sunLogo from "../../assets/sunLogo.svg"
import { Link } from 'react-router-dom';
import InstagramIcon from '@material-ui/icons/Instagram';
import AlternateEmailIcon from '@material-ui/icons'
import TwitterIcon from '@material-ui/icons'
const Footer = () => {
   return (
      
      <footer className="py-3">
         {/* <div className="copy-bottom-txt text-center py-3"> */}



         <div className="social-icons mt-lg-3 mt-2 text-center">
            <div>
               <Link to="/" className="logoLink">
                  <img src={sunLogo} alt="" className="logo" />
               </Link>

            </div>
            <div>
               <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
                  <li style={{ marginLeft: '15px', fontSize: '20px' }}>Home</li>
                  <li style={{ marginLeft: '15px', fontSize: '20px' }}>Lavilla</li>
                  <li style={{ marginLeft: '15px', fontSize: '20px' }}>About us</li>
                  <li style={{ marginLeft: '15px', fontSize: '20px' }}>Contacts</li>
                  <li style={{ marginLeft: '15px', fontSize: '20px' }}>Bokonbaevo st., Kyrgyzstan, Registered in Bishkek no: 16720700</li>
               </ul>

            </div>
         </div>
            <div className="social-icons mt-lg-3 mt-2 text-center">
           <ul>
              <li><a href="#"><InstagramIcon color="primary"/></a></li>
              {/* <li><a href="#"><AlternateEmailIcon color="primary"/></a></li> */}
              {/* <li><a href="#"><TwitterIcon color="primary"/></a></li> */}
           </ul>
        </div>
      </footer>
   );
};

export default Footer;
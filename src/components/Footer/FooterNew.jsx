import React from 'react';
import Button from '@material-ui/core/Button';
import './Footer.css'
import { Link } from 'react-router-dom';
import './FooterNew.css';

const Footer = () => {
  return (
    <div className='footer-container'>
      {/* <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventures newsletter to receive our best
          vacation deals with La Vitta!
            </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
            </p>
        <div className="input-areas">
          <form>
            <input type="email" name="email" placeholder="Your Email"
              className="footer-input" />
            <Button className="btn-footer"
              style={{
                color: '#fff',
                backgroundColor: '#242424',
                fontSize: '18px'
              }}>Subscribe</Button>
          </form>
        </div>
      </section> */}
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>La Vitta</h2>
            <Link to='./'>How it works</Link>
            <Link to='./'>Testimonials</Link>
            <Link to='./'>Investors</Link>
            <Link to='./contacts'>Term of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to='./'>Contact</Link>
            <Link to='./'>Support</Link>
            <Link to='./'>Destination</Link>
            <Link to='./'>Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to='./'>Agency</Link>
            <Link to='./'>Terms</Link>
            <Link to='./'>Ambassador</Link>
            <Link to='./'>Influencer</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to='./'>Instagram</Link>
            <Link to='./'>Facebook</Link>
            <Link to='./'>Youtube</Link>
            <Link to='./'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <small className="website-rights">LaVitta © 2021</small>
          <div className="social-icons">
            <Link className="social-icon-link facebook"
              to="/"
              target='blank'
              aria-label='Facebook'
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link className="social-icon-link instagram"
              to="/"
              target='blank'
              aria-label='Instagram'
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link className="social-icon-link youtube"
              to="/"
              target='blank'
              aria-label='Youtube'
            >
              <i className="fab fa-youtube"></i>
            </Link>
            <Link className="social-icon-link twitter"
              to="/"
              target='blank'
              aria-label='Twitter'
            >
              <i className="fab fa-twitter"></i>
            </Link>
            <Link className="social-icon-link linkedin"
              to="/"
              target='blank'
              aria-label='Linkedin'
            >
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;

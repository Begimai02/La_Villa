import React, { Component } from "react";
import Slider from "react-slick";
import './Offers.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div className="gallery-text">
        <h2 >Luxury Diamonds</h2>
        <Slider {...settings}>
          <div>
            <h3>Sunflower</h3>
            <img className="gallery-carousel" src="https://www.harrywinston.com/sites/default/files/styles/product_slide/public/jewelry-img/NKDPCLRFSPC_424236-trans-1h.png?itok=p6S0_BNr" alt=""/>
          </div>
          <div>
            <h3>Ring Bella</h3>
            <img className="gallery-carousel" src="https://www.harrywinston.com/sites/default/files/styles/product_slide/public/Y57392_lily_cluster_by_harry_winston_ring_diamond_rose_gold_FRDRMQRFLC_trans-1_vD_RGB.png?itok=jA5YkSqB" alt=""/>
          </div>
          <div>
            <h3>Milena</h3>
            <img className="gallery-carousel" src="https://www.harrywinston.com/sites/default/files/styles/product_slide/public/winston_cluster_by_harry_winston_earrings__emerald-_and_diamond__EAEPCLPMWC_trans_3.png?itok=OqaeeYhN" alt=""/>
          </div>
          <div>
            <h3>Anjela</h3>
            <img className="gallery-carousel" src="https://www.harrywinston.com/sites/default/files/styles/product_slide/public/jewelry-img/sparkling_cluster_by_harry_winston_sapphire_aquamarine_and_diamond_ring_FRSAQPCLRFSPC_trans-1h.png?itok=Q6axBudl" alt=""/>
          </div>
          <div>
            <h3>Adelina</h3>
            <img className="gallery-carousel" src="https://www.harrywinston.com/sites/default/files/styles/product_slide/public/jewelry-img/NKDPYRFTRF-228790-trans-1h.png?itok=ZC48Xpbl" alt=""/>
          </div>
          <div>
            <h3>Margo</h3>
            <img className="gallery-carousel" src="https://www.harrywinston.com/sites/default/files/styles/product_slide/public/forget_me_not_by_harry_winston_lariat_necklace_diamond_and_sapphire_NKSPLTFLRFMN_trans_1.png?itok=dkgnpDud" alt=""/>
          </div>
        </Slider>
      </div>
    );
  }
}
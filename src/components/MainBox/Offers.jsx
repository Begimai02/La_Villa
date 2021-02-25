import React, { Component } from "react";
import Slider from "react-slick";
import './Offers.css'
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
        <h2 >Luxury La Villas</h2>
        <Slider {...settings}>
          <div>
            <h3>Vanilla Villa</h3>
            <img className="gallery-carousel" src="http://www.estategr.ru/files/catalog/1000/1166/768766486ca7aad594cbb66086f40b92.jpg" alt=""/>
          </div>
          <div>
            <h3>Sheraton Villa</h3>
            <img className="gallery-carousel" src="https://i.pinimg.com/736x/a7/d5/e8/a7d5e83872493f9f744182946122d520--indigo-camps.jpg" alt=""/>
          </div>
          <div>
            <h3>Ottoman Villa</h3>
            <img className="gallery-carousel" src="https://www.wallpaperup.com/uploads/wallpapers/2016/06/04/978046/fe009aeb76495b2b91ff808fd5daab76-1400.jpg" alt=""/>
          </div>
          <div>
            <h3>Hamilton Villa</h3>
            <img className="gallery-carousel" src="https://static.prian.ru/uploads/2020_04/6/20200406191255852107260o.jpg" alt=""/>
          </div>
          <div>
            <h3>Chique La Villa</h3>
            <img className="gallery-carousel" src="https://www.atlasreal.com/wp-content/uploads/2020/01/zagaleta_arenda24-3-e1579999664186.jpg" alt=""/>
          </div>
          <div>
            <h3>Jannat Villa</h3>
            <img className="gallery-carousel" src="https://krov-torg.ru/wp-content/uploads/2019/08/1-14.jpg" alt=""/>
          </div>
        </Slider>
      </div>
    );
  }
}
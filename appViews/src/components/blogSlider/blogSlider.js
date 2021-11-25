import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./blogSlider.css"
import Post from "../auth/post/post";

export default class BlogSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 1000,
      cssEase: "linear"
    };
    return (
      <div className="slider-component">
        <h2>Spotlight</h2>
        <Slider {...settings}>
        
          <div className="box">
          <Post img="/img/mardi.jpg" alt="Snow"></Post>  
          </div>
          <div className="box">
          <Post img="/img/mardi.jpg" alt="Snow"></Post>
          </div>
          <div className="box">
          <Post img="/img/mardi.jpg" alt="Snow"></Post>
          </div>
          <div className="box">
          <Post img="/img/mardi.jpg" alt="Snow"></Post>
          </div>
        </Slider>
      </div>
    );
  }
}
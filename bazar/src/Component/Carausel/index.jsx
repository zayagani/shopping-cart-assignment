import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./carausel.scss";

const Carosal = ({ sliderData }) => {
  return (
    <div className="home-carousel">
      <div className="home-carousel-box">
        <Carousel
          centerSlidePercentage={100}
          className="carosal"
          autoPlay={true}
          infiniteLoop={true} 
          showStatus={false}
          showThumbs={false}
          centerMode={true}
           
        >
          {sliderData.map((item) => {
            return (
              <div id={item.id} key={item.id}>
                <img src={item.bannerImageUrl} alt={item.bannerImageAlt} />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Carosal;
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./carausel.scss";

const Carosal = ({ banners }) => {
  return (
    <div className="carousel-container">
      <div className="carousel-box">
        <Carousel
          showStatus={false}
          showThumbs={false}
          centerMode={true}
          centerSlidePercentage={100}
          className="carosal"
          autoPlay={true}
          infiniteLoop={true}  
        >
          {banners.map((item) => {
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
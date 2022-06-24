import React from "react";
import "../Banner/banner.scss";
import Button from "../Button";

const Banner = ({ bannerData }) => {
  return (
    <React.Fragment>
    <div className="banner" key={bannerData.key}>
      <div className="banner-image">
        <img
          className="banner-category-image"
          src={bannerData.imageUrl}
          alt="Category"
        />
      </div>
      <div className="banner-box">
        <div className="banner-heading">{bannerData.name}</div>
        <div className="banner-description">
          {bannerData.description}
        </div>
        <div className="banner-button">
          <Button type="xl" onClick={null}>
            Explore {bannerData.key}
          </Button>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
};

export default Banner;
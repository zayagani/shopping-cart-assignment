import axios from "../../apiCall/axios";
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../HomePage/homepage.scss";
import Carosal from "../../Component/Carausel";
import Banner from "../../Component/Banner";

const HomePage = () => {
  const [bannerdata, setBannerData] = useState([]);
  const [categorydata, setCategoryData] = useState([]);
  useEffect(() => {
    (async () => {
      const fetchBanner = await axios.get("/banners");
      const bannerList = await fetchBanner.data;
      setBannerData(bannerList);
      const fetchCategory = await axios.get("/categories");
      const categoryList = await fetchCategory.data;
      setCategoryData(categoryList);
    })();
  }, []);

  return (
    <div className="homePage-container">
      <Carosal sliderData={bannerdata} />
      <div className="homePage-categories-container">
        {categorydata.map((category) => {
          return category?.enabled ? (
            <Banner key={category.id} bannerData={category} />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default HomePage;
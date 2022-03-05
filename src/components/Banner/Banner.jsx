import React from "react";
import banner_1 from "../../images/shop_banner_img7-jpg.jpg";
import banner_2 from "../../images/shop_banner_img8-jpg.jpg";
import banner_3 from "../../images/shop_banner_img9-jpg.jpg";

const Banner = () => {
  return (
    <section className="home-banner mt-5">
      <div className="container-xxl">
        <div className="row banner gy-3 text-center">
          <div className="col-md-4">
            <a href="#">
              <img src={banner_1} alt="" className="img-fluid banner_effect" />
            </a>
          </div>
          <div className="col-md-4">
            <a href="#">
              <img src={banner_2} alt="" className="img-fluid banner_effect" />
            </a>
          </div>
          <div className="col-md-4">
            <a href="#">
              <img src={banner_3} alt="" className="img-fluid banner_effect" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

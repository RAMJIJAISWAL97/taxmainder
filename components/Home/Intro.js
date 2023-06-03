import React, { Component } from "react"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "/img/complaince.jpg" },
  { url: "/img/gst_return.jpg" },
  { url: "/img/ipr_banner.jpg" },
  { url: "/img/iso_certification_1.jpg" },
  { url: "/img/gst_registration_1.jpg" },
  { url: "/img/import_export_code_banner.jpg" },
  { url: "/img/limited_liability_parterneship.jpg" },
];


export default function Intro() {
  return (
    <div>
      <SimpleImageSlider
        width="100%"
        height={"87vh"}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay
      />
    </div>
  );
}

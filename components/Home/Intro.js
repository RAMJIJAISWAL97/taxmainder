import React, { useState, useEffect } from "react";
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
  const [sliderSize, setSliderSize] = useState({ width: "100%", height: "60vh" });

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 768) {
        setSliderSize({ width: "100%", height: "40vh" }); // Mobile adjustments
      } else {
        setSliderSize({ width: "90%", height: "70vh" }); // Laptop adjustments
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center", overflow: "hidden" }}>
      <SimpleImageSlider
        width={sliderSize.width}
        height={sliderSize.height}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay
        useGPURender={true}
        bgColor="transparent"
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}

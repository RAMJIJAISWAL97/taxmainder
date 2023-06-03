import Headings from "components/Headings";
import { ParallaxBanner } from "react-scroll-parallax";
import Image from "next/image";
import parents from "public/img/complaince.jpg";

export default function MotherCare() {
  return (
    <ParallaxBanner
      layers={[
        { image: "/img/complaince.jpg", speed: -20 },
        { image: "/img/complaince.jpg", speed: -10 },
      ]}
      className="aspect-[2/1] motherCare-parallex"
    >
      <div className="overlay"></div>
      <div className="motherCare">
        <Headings
          title="MOTHER TOUCH GALLERY"
          content="WE OFFER YOU THE BEST SUPPORT"
        />
      </div>
      <div className="image-gallery">
        <picture>
          <img src="/img/complaince.jpg" alt="baby-care" />
        </picture>
        <picture>
          <img src="/img/complaince.jpg" alt="baby-care" />
        </picture>
        <picture>
          <img src="/img/complaince.jpg" alt="baby-care" />
        </picture>
        <picture>
          <img src="/img/complaince.jpg" alt="baby-care" />
        </picture>
      </div>
    </ParallaxBanner>
  );
}

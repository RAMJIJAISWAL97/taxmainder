import Headings from "components/Headings";
import { ParallaxBanner } from "react-scroll-parallax";
import Image from "next/image";
import kids from "public/img/kids.jpg";
import bay from "public/img/bay.png";
import parents from "public/img/parents.jpg";

export default function MotherCare() {
  return (
    <ParallaxBanner
      layers={[
        { image: "/img/parents.jpg", speed: -20 },
        { image: "/img/parents.jpg", speed: -10 },
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
          <img src="/img/maternity-care2.jpg" alt="baby-care" />
        </picture>
        <picture>
          <img src="/img/after-school.jpeg" alt="baby-care" />
        </picture>
        <picture>
          <img src="/img/baby-care.jpg" alt="baby-care" />
        </picture>
        <picture>
          <img src="/img/baby-care.jpg" alt="baby-care" />
        </picture>
      </div>
    </ParallaxBanner>
  );
}

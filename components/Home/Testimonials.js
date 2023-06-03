import React, { Component } from "react"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Testimonials() {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={6100}
    >
      <div>
        <picture>
          <img src="/img/limited_liability_parterneship_2.jpg" alt="s" />
        </picture>
        <div className="myCarousel">
          <h3>Expert Team</h3>
          <p>
            We love our customers and provide excellent services to make our customers happy!
          </p>
        </div>
      </div>

      <div>
        <picture>
          <img src="/img/hppy_customers.jpg" alt="s" />
        </picture>
        <div className="myCarousel">
          <h3>Customers</h3>
          <p>
            Excellent service, cool experts, best suggestions and value for money!
          </p>
        </div>
      </div>

      <div>
        <picture>
          <img src="/img/founder.jpg" alt="s" />
        </picture>
        <div className="myCarousel">
          <h3>Founder</h3>
          <p>
            We love to understnd our customer's Problema and Solve them!
          </p>
        </div>
      </div>
    </Carousel>
  );
}

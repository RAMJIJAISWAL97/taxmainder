import Headings from "components/Headings";
import DetailedMotherServices from "components/Home/DetailedMotherServices";
import Services from "components/Home/Services";
import Footer from "Layout/Footer";
import { Header } from "Layout/Header";
import Layout from "Layout/Layout";
import styles from "styles/Home.module.css";
import { whyChooseData } from "Data/whyChooseData.js";
import WhyChooseUs from "components/Home/WhyChooseUs";
import { ParallaxBanner } from "react-scroll-parallax";
import Counter from "components/Home/Counter";
import data from "Data/counterData.json";
import Intro from "components/Home/Intro";
import Testimonials from "components/Home/Testimonials";

export default function Home() {
  return (
    <Layout header footer notification>
      <Intro />
       
      <div className={`${styles.topSection} ${styles.radialBorder}`}>
        {/* <Headings title="" content="An Overview of our Services"/> */}
        <div className={`${styles.mainSection}  grid`}>
          <Services />
        </div>
      </div>
      {/* <div className={`${styles.detailedMotherServices}`}>
        <DetailedMotherServices />
      </div> */}
      <div className={`${styles.whyChooseWrapper} ${styles.radialBorder}`}>
        <Headings
          title="CUSTOMER PROBLEM IS OUR PROBLEM"
          content="WHY CHOOSE US?"
        />
        <div className={styles.whyChooseContainer}>
          {whyChooseData.map((data, idx) => (
            <WhyChooseUs key={idx} title={data.title} content={data.content} icon={data.icon}/>
          ))}
        </div>
      </div>
      <ParallaxBanner
        layers={[
          { image: "/img/choose_us.jpg", speed: -10 },
        ]}
        className="aspect-[2/2] parallax"
      >
        <div className="absolute inset-0 items-center justify-center parallax-content">
          <h3 className="text-8xl text-white font-thin">Why Choose Us?</h3>
          <p>Why You Should Contact Us?</p>
          <div className={styles.ruler}></div>
          <div className={`${styles.sideContent} ${styles.sides1}`}>
            <h1>1</h1>
            <div className={styles.sideContentContainer}>
              <h4>Expert in industry</h4>
              <p>
              Expert at Taxmainder are highly qualified and having 7+ years of professional experience in Business Registration, IPR, Government Registration, Compliance, Tax and Accounting Services etc. 
              </p>
              <h5>Experience makes a person Expert.</h5>
            </div>
          </div>
          <div className={`${styles.sideContent} ${styles.sides2}`}>
            <h1>2</h1>
            <div className={styles.sideContentContainer}>
              <h4>Value for money</h4>
              <p>
                We offer competitive pricing, flexible payment options, customized services and other incentives that provide value to customers.
              </p>
            </div>
          </div>
          <div className={`${styles.sideContent} ${styles.sides3}`}>
            <h1>3</h1>
            <div className={styles.sideContentContainer}>
              <h4>Customer Satisfaction</h4>
              <p>
                Customer problem is our problem. We provide Expert guidance to our customers.
                We provide 24*7 customer support to our customers.
              </p>
            </div>
          </div>
        </div>
      </ParallaxBanner>

      <div className="count">
        {data.counts.map((count) => (
          <Counter key={count.id} data={count} />
        ))}
      </div>
      <Testimonials />
    </Layout>
  );
}

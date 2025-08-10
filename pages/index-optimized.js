import dynamic from 'next/dynamic';
import Headings from "components/Headings";
import { whyChooseData } from "Data/whyChooseData.js";
import { ParallaxBanner } from "react-scroll-parallax";
import data from "Data/counterData.json";
import Intro from "components/Home/Intro";

// Lazy load heavy components
const Services = dynamic(() => import("components/Home/Services"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />,
  ssr: true
});

const Counter = dynamic(() => import("components/Home/Counter"), {
  loading: () => <div className="h-32 bg-gray-100 animate-pulse rounded-lg" />,
  ssr: true
});

// Optimize parallax loading
const OptimizedParallax = () => (
  <ParallaxBanner
    layers={[
      { 
        image: "/img/choose_us.jpg", 
        speed: -10,
        expanded: false,
        style: { 
          height: '100%',
          width: '100%',
          objectFit: 'cover'
        }
      },
    ]}
    className="aspect-[2/2] parallax"
  >
    <div className="absolute inset-0 items-center justify-center parallax-content">
      <h3 className="text-4xl md:text-6xl lg:text-8xl text-white font-thin">Why Choose Us?</h3>
      <p className="text-lg md:text-xl text-white mt-4">Why You Should Contact Us?</p>
      <div className="w-24 h-1 bg-white mx-auto my-8"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4">1</h1>
          <h4 className="text-xl font-semibold text-white mb-2">Expert in industry</h4>
          <p className="text-white/90 text-sm">
            Expert at Taxmainder are highly qualified and having 7+ years of professional experience in Business Registration, IPR, Government Registration, Compliance, Tax and Accounting Services etc.
          </p>
          <h5 className="text-white/80 text-xs mt-2">Experience makes a person Expert.</h5>
        </div>
        
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4">2</h1>
          <h4 className="text-xl font-semibold text-white mb-2">Value for money</h4>
          <p className="text-white/90 text-sm">
            We offer competitive pricing, flexible payment options, customized services and other incentives that provide value to customers.
          </p>
        </div>
        
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4">3</h1>
          <h4 className="text-xl font-semibold text-white mb-2">Customer Satisfaction</h4>
          <p className="text-white/90 text-sm">
            Customer problem is our problem. We provide Expert guidance to our customers.
            We provide 24*7 customer support to our customers.
          </p>
        </div>
      </div>
    </div>
  </ParallaxBanner>
);

export default function Home() {
  return (
    <>
      <Intro />
      
      <div className="topSection radialBorder">
        <div className="mainSection grid">
          <Services />
        </div>
      </div>
      
      <OptimizedParallax />
      
      <div className="count grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto px-4 py-8">
        {data.counts.map((count) => (
          <Counter key={count.id} data={count} />
        ))}
      </div>
    </>
  );
}

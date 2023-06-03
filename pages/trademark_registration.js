import Headings from "components/Headings";
import Layout from "Layout/Layout";
import Link from "next/link";
import styles from "styles/About.module.css";
import babyCareServices from "Data/babyCareServices.json";

export default function BabyCare() {
  return (
    <Layout header footer notification>
      <div className={styles.container}>
        <picture>
          <img
            src="/img/trademark_registration.jpg"
            alt="kids"
            className={styles.img}
          />
        </picture>
        <div className={styles.content}>
          <h1><b>Trademark Registration</b></h1>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.leftContent}>

        <h2>Trademark</h2>
                <p>
                Trademark is a symbol, word, phrase, design, or a combination of these elements that identifies and 
                distinguishes the source of goods or services of one party from those of others. Essentially, a trademark serves as a unique identifier of a particular brand or business.
                </p>
                <p> 
                A trademark provides legal protection to the owner of the mark by preventing others 
                from using similar marks that may confuse consumers or dilute the distinctiveness of the mark. Trademarks can be registered with government agencies to enhance their legal protection, although registration is not always required.
                </p>
                <p>
                Trademark protection can extend to a wide range of goods and services, including products, packaging, labels, and even sounds or smells. 
                Trademarks are an essential part of branding and marketing, as they allow businesses to build recognition and establish a reputation in the marketplace.
                </p>
                <p>Protect your brand identity and establish a distinct presence in the marketplace with our trademark registration services. Our team of experts can guide you 
                    through the entire process of trademark registration, from conducting a comprehensive trademark search to filing and monitoring your trademark application.
                </p>

          <div className={styles.miniContent}>
              <div className={`${styles.left} ${styles.flex1}`}>
                <h4><p>
                Why Register Your Trademark?
                </p> </h4>
                <p>Trademark registration provides a range of benefits, including</p>
                  <ol>
                    <li>
                    Legal protection
                    </li>
                    <p> Registered trademarks are protected under the law, giving you the exclusive right to use the mark for your goods and services. This protection extends to preventing others from using similar marks that may confuse consumers or dilute the distinctiveness of your mark.</p>
                    <li>
                    Brand recognition
                    </li>
                    <p>Trademarks serve as unique identifiers of your business, products, or services, helping you establish brand recognition and build a reputation in the marketplace.

                    </p>
                    <li>
                    Competitive advantage
                    </li>
                    <p>
                    Trademarks can give you a competitive advantage by distinguishing your products or services from those of your competitors.
                    </p>
                </ol>
              </div>
              
              <div className={styles.right}>
                <picture>
                  <img
                    src="/img/trademark_registration_1.jpg"
                    alt="kids"
                    height="300px"
                    className={styles.img}
                  />
                </picture>
              </div>
          </div>
          

          <div className={styles.miniContent}>
              <div className={`${styles.left} ${styles.flex1}`}>
                <h4>Our Trademark Registration Process</h4>
                <p>
                Our trademark registration process includes the following steps:
                </p>
                  <ol>
                    <li>
                    Comprehensive trademark search
                    </li> <p>We conduct a comprehensive search of existing trademarks to ensure that your trademark is unique and does not infringe on any existing marks.</p>
                    <li>
                    Filing of trademark application
                    </li><p>We prepare and file your trademark application with the relevant government agency.</p>
                    <li>
                    Application monitoring
                    </li><p>We monitor the progress of your trademark application and respond to any inquiries or objections from the government agency.</p>
                    <li>
                    Trademark registration
                    </li><p>Once your trademark is approved, we ensure that it is registered and protected under the law.</p>
                  </ol>

              </div>
          </div>
                  
        <p>Protect your brand and establish a strong presence in the marketplace with our trademark registration services. Contact us today to learn more about how we can help you register your trademark and protect your business.</p>

        </div>
        
        <div className="links">
          <h4>Company</h4>
          <ul>
            {babyCareServices.map((data, idx) => (
              <li key={idx}>
                <Link href={data.href}>
                  <a>{data.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </Layout>
  );
}

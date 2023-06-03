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
            src="/img/trademark_renewal.jpg"
            alt="kids"
            className={styles.img}
          />
        </picture>
        <div className={styles.content}>
          <h1><b>Trademark Renewal Services</b></h1>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.leftContent}>

        <h2>Trademark Renewal Services</h2>
                <p>
                Renewing your trademark is essential to maintain your legal rights and prevent any unauthorized use of your mark. 
                At our firm, we offer trademark renewal services to help you stay ahead of the competition and protect your brand identity.
                </p>

          <div className={styles.miniContent}>
              <div className={`${styles.left} ${styles.flex1}`}>
                <h4><p>
                Why Renew Your Trademark?
                </p> </h4>
                <p>Trademark renewal provides a range of benefits, including:</p>
                  <ol>
                    <li>
                    Continued legal protection
                    </li>
                    <p> By renewing your trademark, you can continue to enjoy legal protection for your mark. This means that you retain the exclusive right to use your mark for your goods and services, and prevent others from using similar marks that may cause confusion in the marketplace.</p>
                    <li>
                    Avoiding legal disputes
                    </li>
                    <p>Failing to renew your trademark can result in the loss of your legal rights to the mark, leaving you vulnerable to legal disputes and infringement claims from others.

                    </p>
                    <li>
                    Maintaining brand recognition
                    </li>
                    <p>
                    Renewing your trademark helps maintain your brand recognition and reputation in the marketplace, ensuring that consumers continue to associate your mark with your products or services.
                    </p>
                </ol>
              </div>
              
              <div className={styles.right}>
                <picture>
                  <img
                    src="/img/trademark_renewal_1.jpg"
                    alt="kids"
                    height="300px"
                    className={styles.img_side}
                  />
                </picture>
              </div>
          </div>
          

          <div className={styles.miniContent}>
              <div className={`${styles.left} ${styles.flex1}`}>
                <h4>Our Trademark Renewal Process</h4>
                <p>
                Our trademark renewal process includes the following steps:
                </p>
                  <ol>
                    <li>
                    Assessment of trademark status
                    </li> <p>We assess the status of your trademark to determine whether it is eligible for renewal.</p>
                    <li>
                    Filing of renewal application
                    </li><p>We prepare and file your trademark renewal application with the relevant government agency.</p>
                    <li>
                    Application monitoring
                    </li><p>We monitor the progress of your trademark application and respond to any inquiries or objections from the government agency.</p>
                    <li>
                    Trademark renewal
                    </li><p>Once your trademark is renewed, we ensure that it is protected under the law and that you continue to enjoy legal protection for your mark.</p>
                  </ol>

              </div>
          </div>
                  
        <p>Protect your brand and legal rights by renewing your trademark with our trademark renewal services. Contact us today to learn more about how we can help you maintain your legal rights and stay ahead of the competition.</p>

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

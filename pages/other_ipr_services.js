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
          <h1><b>Other IPR Services</b></h1>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.leftContent}>

        <h2>Other IPR Services</h2>
                <p>
                In addition to trademark, copyright, and patent services, our firm offers a range of other Intellectual Property Rights (IPR) services to help you protect your creative works and business assets. Our experienced team can provide customized solutions tailored to your unique needs.
                </p>

          <div className={styles.miniContent}>
              <div className={`${styles.left} ${styles.flex1}`}>
                <h4><p>
                Our Other IPR Services include:
                </p> </h4>
                  <ol>
                    <li>
                    Design Registration
                    </li>
                    <p> Protect the unique designs of your products or packaging with our design registration services. Our team will help you file your design application and provide support throughout the registration process.</p>
                    <li>
                    Geographical Indication Registration
                    </li>
                    <p>Our firm can assist you with registering Geographical Indications (GI) for your products. GI registration can help protect the reputation of your products, prevent counterfeiting, and ensure that customers can trust the origin and quality of your products.

                    </p>
                    <li>
                    Trade Secret Protection
                    </li>
                    <p>
                    Our trade secret protection services help you safeguard confidential business information, such as formulas, processes, and customer lists. We can help you identify your trade secrets, develop policies to protect them, and take legal action if your trade secrets are misappropriated.
                    </p>

                    <li>
                    IP Due Diligence
                    </li>
                    <p>
                    Before entering into a business transaction or acquiring a company, it is important to assess the intellectual property assets involved. Our IP due diligence services help you identify and evaluate intellectual property assets, assess their value, and identify potential risks.
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

                  
        <p>Protect your intellectual property assets and ensure that your creative works are protected with our other IPR services. Contact us today to learn more about how we can help you protect your business.</p>

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

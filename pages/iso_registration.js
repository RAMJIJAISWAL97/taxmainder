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
            src="/img/iso_certification.png"
            alt="kids"
            className={styles.img}
          />
        </picture>
        <div className={styles.content}>
          <h1><b>ISO (International Organization for Standardization) Certification</b></h1>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.leftContent}>
          <div className={styles.miniContent}>
              <div className={`${styles.left} ${styles.flex1}`}>
                <h4>International Organization for Standardization</h4>
                <p>
                ISO certification is becoming increasingly important for businesses that want to remain competitive in today market. It demonstrates a company commitment to quality, safety, and environmental responsibility. At our company, we offer ISO certification services that help businesses achieve their goals and improve their operations.
                </p><p>
                ISO (International Organization for Standardization) certification is not mandatory for any business in India.
                 However, certain industries and businesses may choose to obtain ISO certification to demonstrate their commitment to quality management systems and standards.
                </p><p>
                Some of the industries and businesses that may choose to obtain ISO certification in India include:
                </p>
                  <ol>
                    <li>
                    Manufacturing industries such as automobiles, chemicals, textiles, and electronics
                    </li>
                    <li>
                    Service industries such as healthcare, hospitality, and information technology
                    </li>
                    <li>
                    Construction and engineering firms
                    </li>
                    <li>
                    Educational institutions
                    </li>
                    <li>
                    Government organizations and departments
                    </li>
                  </ol>
              </div>
              <div className={styles.right}>
                <picture>
                  <img
                    src="/img/iso_certification_2.jpg"
                    alt="kids"
                    height="300px"
                    className={styles.leftContentImg}
                  />
                </picture>
              </div>
          </div>
          <p>
            ISO certification can help businesses improve their processes, enhance customer satisfaction, and increase their competitiveness in the market.
            However, it is important to note that ISO certification is a voluntary process and businesses should carefully evaluate the benefits and costs before
            deciding to pursue certification. 
          </p>


          <div className={styles.miniContent}>
              <div className={`${styles.left} ${styles.flex1}`}>
                <h4>Why ISO certifications?</h4>
                <p>
                ISO certification offers several benefits to organizations, some of which are:
                </p>
                  <ol>
                    <li>
                    Improved Credibility
                    </li> <p>ISO certification improves the credibility of an organization by demonstrating that it meets internationally recognized standards for quality, safety, and environmental management.</p>
                    <li>
                    Increased Customer Confidence
                    </li><p>ISO certification instills confidence in customers that the products or services they are purchasing meet high standards for quality, safety, and environmental management.</p>
                    <li>
                    Competitive Advantage
                    </li><p>ISO certification can give organizations a competitive advantage by demonstrating that they meet international standards for quality and management systems, which can lead to increased business opportunities.</p>
                    <li>
                    Enhanced Efficiency
                    </li><p>ISO certification promotes process efficiency and continuous improvement by requiring organizations to implement and maintain effective quality management systems.</p>
                    <li>
                    Improved Employee Morale
                    </li><p>ISO certification can improve employee morale by creating a culture of quality, safety, and environmental responsibility, and by providing clear guidelines for performance and accountability.</p>
                    <li>
                    Reduced Costs
                    </li><p>ISO certification can help organizations reduce costs by identifying and eliminating inefficiencies and waste in their processes, and by improving the quality and consistency of their products or services.</p>
                    <li>
                    Improved Relations with Regulators
                    </li><p>ISO certification can improve relations with regulators by demonstrating that an organization is committed to meeting high standards for quality, safety, and environmental management.</p>

                  </ol>
              </div>
              <div className={styles.right}>
                <picture>
                  <img
                    src="/img/iso_certification_1.jpg"
                    alt="kids"
                    height="300px"
                    className={styles.leftContentImg}
                  />
                </picture>
              </div>
          </div>
          <p>
          At our company, we understand the importance of ISO certification for businesses. Our team of experts is dedicated to helping your business achieve its goals and improve its operations through ISO certification. Contact us today to learn more about our ISO certification services. </p>
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

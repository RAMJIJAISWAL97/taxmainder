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
            src="/img/other_business_registration.jpg"
            alt="kids"
            className={styles.img}
          />
        </picture>
        <div className={styles.content}>
          <h1>Other Business Registration and Ligal Support</h1>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.leftContent}>
          <p>
          In India, all businesses are required to be registered with the government,
          but the type of registration required depends on the type of business entity and the activities it carries out. Even for small scale business you need approvals. 
          </p>

          <div className={styles.miniContent}>
            <div className={`${styles.left} ${styles.flex1}`}>
              <h4>Here are some examples of business entities that need to be registered with the government in India:</h4>
              <ol>
                <li>Private Limited Company</li>
                <li>Public Limited Company</li>
                <li>Limited Liability Partnership (LLP)</li>
                <li>Sole Proprietorship</li>
                <li>Partnership Firm</li>
                <li>One Person Company (OPC)</li>
                <li>Non-Profit Organizations</li>
                <li>NGO Registraion</li>
              </ol>

              <p>
              Apart from these, businesses may also require additional registrations such as Goods and Services Tax (GST) registration, Import-Export Code (IEC) registration, Shops and Establishment Act registration, and more depending on their specific activities and operations. 
              It is important for business owners to consult with a legal professional to determine the appropriate registrations and compliance requirements for their business.
              </p>
              <p>
              We offer a variety of registration, compliance, accounting, and taxation services to help your business thrive. Our team of experienced 
              professionals is here to guide you through the complex legal landscape of running a business, and ensure that you are always in compliance with all relevant regulations and laws.
              </p>
              <p>
              Don't let the legal and financial aspects of running a business hold you back. Contact us today to learn more about our services and how we can help you achieve success.
              </p>

            </div>
      
            <div className={styles.right}>
              <picture>
                <img
                  src="/img/other_business_registration_1.jpg"
                  alt="kids"
                  height="300px"
                  className={styles.leftContentImg}
                />
              </picture>
            </div>
          </div>
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

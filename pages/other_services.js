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
            src="/img/other_services.jpg"
            alt="kids"
            className={styles.img}
          />
        </picture>
        <div className={styles.content}>
          <h1>Other Registration Services</h1>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.leftContent}>
            <h4>Something about Personal Security Officer Service</h4>
            <p>
            At Taxmainder, we offer a comprehensive range of registration services to help businesses and individuals comply with regulatory requirements and start their operations smoothly.
            From company registration to GST registration, we provide expert guidance and support throughout the registration process, ensuring that our clients are fully compliant with applicable laws and regulations.
            </p>

          {/* <h4>Are you Looking for Domestic Maid ?</h4>
          <p>
            If you are looking for a domestic maid, then this is a one stop solution for all these kind of needs.
            Here you can find well educated and highly skilled maid with effective cost.
          </p> */}

          <div className={styles.miniContent}>
            <div className={`${styles.left} ${styles.flex1}`}>
              <h4>Why Choose Us?:</h4>
              <ol>
                <li>Expert Guidance</li>
                <p>
                Our team of experts has years of experience in registration and compliance, providing you with expert advice and guidance throughout the registration process.
                </p>
                <li>Compliance and Regulatory Knowledge
                </li>
                <p>We stay up-to-date with the latest laws and regulations related to registration and compliance, ensuring that our clients are fully compliant and avoid any legal or regulatory issues.
                </p>

                <li>Personalized Services
                </li>
                <p>We understand that every client needs are unique. That is why we provide personalized services that are tailored to your specific requirements.
                </p>

                <li>Competitive Pricing
                </li>
                <p>We offer our services at competitive prices, ensuring that you receive high-quality services without breaking the bank.
                </p>

                <li>Customer Satisfaction
                </li>
                <p>We prioritize customer satisfaction and strive to provide the highest level of customer service and support. Our goal is to make the process of obtaining and maintaining your registration as simple and hassle-free as possible.
                </p>

              </ol>
            </div>
            <div className={styles.right}>
              <picture>
                <img
                  src="/img/other_services_1.jpg"
                  alt="kids"
                  height="300px"
                  className={styles.leftContentImg}
                />
              </picture>
            </div>
          </div>
          <p>
            At Taxmainder, we offer all types of registration services in India, providing expert guidance and support to help you comply with regulatory requirements and start your operations smoothly. Contact us today to learn more about our services and how we can help you.
            </p>
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

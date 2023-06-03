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
            src="/img/private_company_registration.jpg"
            alt="kids"
            className={styles.img}
          />
        </picture>
        <div className={styles.content}>
          <h1><b>Private Comapny Registration</b></h1>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.leftContent}>
          <h4>Your Welcome to Taxmainder </h4>
          <p>
          Welcome to Taxmainder, your one-stop-shop for private company registration services. We understand that starting a business can be a complex process, which is why we offer a range of services to help simplify the private company registration process and get your business up and running.
          <br></br>
          Our team of experienced professionals can provide you with the guidance and support you need to register your private company quickly and efficiently. Whether you're looking to incorporate a new company, or need to update your existing company registration details, we have the expertise and knowledge to help you achieve your goals.
          </p>
        <div className={styles.miniContent}>
            <div className={`${styles.left} ${styles.flex1}`}>
              <h4>Private Company Registration Process</h4>
              <p>Our private company registration process is designed to be simple and straightforward, and typically involves the following steps: </p>
              <ol>
                <h4><li>Consultation</li></h4>
                Our team will work with you to understand your specific needs and goals, and provide you with a customized plan for private company registration.

                <h4><li>Name Reservation</li></h4>
                We will help you select and reserve a unique company name that reflects your brand and meets all legal requirements.

                <h4><li>Documentation</li></h4>
                Our team will work with you to understand your specific needs and goals, and provide you with a customized plan for private company registration.

                <h4><li>Incorporation</li></h4>
                Once your company registration has been approved, we will provide you with all necessary documentation, including your Certificate of Incorporation.

                <h4><li>Post-Registration Compliance</li></h4>
                We will guide you through the ongoing compliance requirements for your private company, including annual filings, tax registrations, and other legal requirements.
              </ol>
            </div>
            <div className={styles.right}>
              <picture>
                <img
                  src="/img/private_company_registration_1.jpg"
                  alt="kids"
                  height="300px"
                  className={styles.leftContentImg}
                />
              </picture>
            </div>
        </div>
        <div className={styles.miniContent}>
            <div className={`${styles.left} ${styles.flex1}`}>
            <h4>Why Choose Taxmainder for Private Company Registration?</h4>
            <p>At Taxmainder, we are committed to providing our clients with the highest level of service and support throughout the private company registration process. Here are just a few reasons why you should choose us: </p>
              <ol>
                <h4><li>Experienced Professionals</li></h4>
                  <p>Our team of experienced professionals has helped numerous businesses register their private companies, and we have the expertise and knowledge to guide you through every step of the process.</p>
                  
                <h4><li>Customized Solutions</li></h4>
                  <p>We understand that every business is unique, which is why we provide customized solutions tailored to your specific needs and goals.</p>

                <h4><li>Competitive Pricing</li></h4>
                  <p>We offer competitive pricing for our private company registration services, so you can get the support you need without breaking the bank.</p>

                <h4><li>Ongoing Support</li></h4>
                  <p>Our commitment to our clients doesn't end with the private company registration process. We offer ongoing support to help you stay compliant with all legal requirements and ensure your business's ongoing success.</p>

              </ol>
              <h4>Contact us today to learn more about our private company registration services and how we can help you achieve your business goals.</h4>
            </div>
            <div className={styles.right}>
            <picture>
              <img
                src="/img/private_company_registration_2.jpg"
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

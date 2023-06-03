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
            src="/img/fssai_registration.png"
            alt="kids"
            className={styles.img}
          />
        </picture>
        <div className={styles.content}>
          <h1>FSSAI Registration</h1>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.leftContent}>
          <div className={styles.miniContent}>
            <div className={`${styles.left} ${styles.flex1}`}>
              <h4>FSSAI</h4>
              <p>Are you planning to start a food business in India? Then, you must obtain the FSSAI registration to ensure that your products are safe for consumption and meet the standards set by the Food Safety and Standards Authority of India (FSSAI). </p>
              <h4>What is FSSAI Registration? and why?</h4>
              <p> FSSAI registration is mandatory for all food businesses in India under the Food Safety and Standards Act, 2006. This license ensures that the food products sold or manufactured by the business meet the standards set by FSSAI and are safe for consumption. The FSSAI registration process involves submitting an application form, along with the necessary documents and fees. </p>
            </div>
            <div className={styles.right}>
              <picture>
                <img
                  src="/img/fssai_registration_2.jpg"
                  alt="kids"
                  height="300px"
                  className={styles.leftContentImg}
                />
              </picture>
            </div>
          </div>
          
          <h4> Benefits of FSSAI Registration</h4>
          <p>
            <ol>
              <li>
              Legitimizes your business
              </li>
              <p> FSSAI registration provides legal legitimacy to your food business, making it easier for you to apply for loans, grants, and other government schemes. </p>
              <li>
              Ensures quality and safety
              </li>
              <p> With FSSAI registration, you can ensure that your products meet the quality and safety standards set by the regulatory authority, thereby increasing your customers trust in your brand. </p>
              <li>
              Avoids legal issues
              </li>
              <p> Failure to obtain FSSAI registration can result in legal issues, including hefty fines and imprisonment. Therefore, it is crucial to get your FSSAI license to avoid any legal troubles. </p>
            </ol>
          </p>

          <h4> Why Choose Taxmainder for FSSAI Registration? </h4>
          <p>
            <ol>
              <li>
              Experienced team of experts
              </li>
              <p> Our team of FSSAI experts has years of experience in helping businesses obtain their FSSAI license in a timely and cost-effective manner. </p>
              <li>
              Hassle-free process:
              </li>
              <p> We handle the entire registration process, from filling out the application form to submitting the documents, so that you can focus on running your business. </p>
              <li>
              Cost-effective solutions
              </li>
              <p> We offer competitive pricing for our FSSAI registration services, ensuring that you get the best value for your money. </p>
            </ol>
          </p>
          <p>Getting your FSSAI registration is crucial for starting or running a food business in India. With Expert of taxmainder services, you can obtain your FSSAI license hassle-free and ensure that your food products meet the safety and quality standards set by the regulatory authority. Contact us today to get started!</p>
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

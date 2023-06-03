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
            src="/img/limited_liability_parterneship.jpg"
            alt="kids"
            className={styles.img}
          />
        </picture>
        <div className={styles.content}>
          <h1><b>Limited Liability Partnership Company Registration</b></h1>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.leftContent}>
          <h2>Limited Liability Partnership Company</h2>
          <p>
          If you're looking to start a business that offers the flexibility of a partnership while protecting your personal assets, a Limited Liability Partnership (LLP) might be the right choice for you. An LLP is a hybrid business structure that combines the benefits of a partnership and a limited liability company (LLC). This means that each partner in the LLP is not personally liable for the debts and liabilities of the business.
          </p>
          <p>
          At Taxmainder, we offer comprehensive LLP registration services to help you get your business up and running quickly and easily. Our team of experienced professionals will guide you through the entire process, from preparing and filing your LLP documents to obtaining your certificate of registration.
          </p>


          <div className={styles.miniContent}>
            <div className={`${styles.left} ${styles.flex1}`}>
                <h2>Why Choose Us?</h2>
                <p>We understand that starting a new business can be overwhelming, which is why we strive to make the LLP registration process as smooth and stress-free as possible. When you work with us, you'll enjoy the following benefits:</p>
                <ol>
                  <h4>
                    <li>Expert guidance</li> 
                  </h4>
                  <p> 
                  Our team of experienced professionals will help you navigate the LLP registration process from start to finish.
                  </p>
                  <h4>
                    <li>Personalized service</li> 
                  </h4>
                  <p> 
                  We understand that every business is unique, which is why we offer personalized solutions to fit your specific needs.
                  </p>
                  <h4>
                    <li>Affordable pricing</li> 
                  </h4>
                  <p> 
                  We offer competitive pricing and flexible payment options to help you get the most value for your money.
                  </p>
                  <h4>
                    <li>Quick turnaround time</li> 
                  </h4>
                  <p> 
                  We know that time is money, which is why we work quickly and efficiently to get your LLP registered as soon as possible.
                  </p>
                </ol>
            </div>
            <div className={styles.right}>
              <picture>
                <img
                  src="/img/limited_liability_parterneship_2.jpg"
                  alt="kids"
                  className={styles.right}
                />
              </picture>
            </div>
          </div>


          <div className={styles.miniContent}>
            <div className={`${styles.left} ${styles.flex1}`}>
            <h2>Our LLP Registration Services</h2>
                <p>We offer a wide range of LLP registration services, including:</p>
                <ol>
                  <h4>
                    <li>Drafting and filing of LLP agreement</li> 
                  </h4>
                  <p> 
                  Our team of legal experts will draft a comprehensive LLP agreement that is tailored to your business needs and file it with the Registrar of Companies.
                  </p>
                  <h4>
                    <li>Obtaining Digital Signature Certificate (DSC) and Director Identification Number (DIN)</li> 
                  </h4>
                  <p> 
                  We will assist you in obtaining your DSC and DIN, which are required for filing your LLP registration documents.
                  </p>
                  <h4>
                    <li>Filing of LLP registration documents</li> 
                  </h4>
                  <p> 
                  We will prepare and file all the necessary documents required for registering your LLP, including the LLP agreement, incorporation documents, and other required forms.
                  </p>
                  <h4>
                    <li>Obtaining Certificate of Registration</li> 
                  </h4>
                  <p> 
                  Once your LLP is registered, we will obtain your Certificate of Registration from the Registrar of Companies and deliver it to you.
                  </p>
                </ol>
            </div>
            <div className={styles.right}>
              <picture>
                <img
                  src="/img/limited_liability_parterneship_1.jpg"
                  alt="kids"
                  height="200px"
                  width = "200px"
                  className={styles.right}
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

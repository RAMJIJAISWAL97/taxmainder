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
            src="/img/gst_return.jpg"
            alt="kids"
            className={styles.img}
          />
        </picture>
        <div className={styles.content}>
          <h1><b>GST Return</b></h1>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.leftContent}>

        <h2>Welcome to GST Return Services</h2>
                <p>
                    We offers reliable and hassle-free GST Return Filing services in India. Our team of experienced professionals ensures that all your GST returns are filed on time and accurately. With our end-to-end GST return filing services, you can focus on your core business operations while we take care of your GST compliance.
                </p>

          <div className={styles.miniContent}>
              <div className={`${styles.left} ${styles.flex1}`}>
                <p>
                Why Choose Our GST Return Services?
                </p>
                  <ol>
                    <li>
                    Expertise
                    </li>
                    <p> Our team of GST experts has in-depth knowledge and experience in handling GST return filing for various industries and business types. </p>
                    <li>
                    Timely Filing
                    </li>
                    <p>We ensure that all your GST returns are filed on time to avoid any penalties and legal complications.</p>
                    <li>
                    Accuracy
                    </li>
                    <p>
                    We use advanced tools and software to ensure accurate calculation of your GST liability and input tax credit.
                    </p>
                    <li>
                    Cost-effective
                    </li>
                    <p>
                    Our GST return filing services are affordable and provide value for money.
                    </p>
                  </ol>
              </div>
              <div className={styles.right}>
                <picture>
                  <img
                    src="/img/gst_return_1.jpg"
                    alt="kids"
                    height="300px"
                    className={styles.leftContentImg}
                  />
                </picture>
              </div>
          </div>
          

          <div className={styles.miniContent}>
              <div className={`${styles.left} ${styles.flex1}`}>
                <h4>Our Services Include </h4>
                  <ol>
                    <li>
                    Preparation and filing of GSTR-1, GSTR-2A, GSTR-3B, and other GST returns.
                    </li>
                    <li>
                    Reconciliation of GST returns with books of accounts and resolving any discrepancies.
                    </li>

                    <li>
                    Calculation of GST liability and input tax credit.
                    </li>
                    <li>
                    GST compliance review and advisory services.
                    </li>
                    <li>
                    Responding to GST notices and resolving any queries from the GST department.
                    </li>
                  </ol>

                  <h4>Our Process </h4>
                  <ol>
                    <li>
                    We gather all the necessary information and documents from you.
                    </li>
                    <li>
                    Our team of experts prepares and verifies your GST returns for accuracy.
                    </li>

                    <li>
                    We file your GST returns on the GSTN portal.
                    </li>
                    <li>
                    We provide you with regular updates and reminders for future compliance.
                    </li>
                  </ol>
                  <h5>
                  Get in touch with us to know more about our GST Return Filing services and how we can help you achieve GST compliance. Call us at [Your Contact Number] or email us at [Your Email Address].
                  </h5>
              </div>

              <div className={styles.right}>
                <picture>
                  <img
                    src="/img/gst_return_2.jpg"
                    alt="kids"
                    height="300px"
                    className={styles.leftContentImg}
                  />
                </picture>
              </div>
          </div>
                  
        <p> At Taxmainder, we provide patent registration services to help you protect your intellectual property and obtain exclusive rights to your invention. Contact us today to learn more about our services and how we can help you secure your patent.</p>

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

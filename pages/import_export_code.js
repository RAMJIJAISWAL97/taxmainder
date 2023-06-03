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
            src="/img/import_export_code.jpg"
            alt="kids"
            className={styles.img}
          />
        </picture>
        <div className={styles.content}>
          <h1><b>Import Export Code</b></h1>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.leftContent}>
          <div className={styles.miniContent}>
              <div className={`${styles.left} ${styles.flex1}`}>
                <h4>Import Export Code</h4>
                <p>
                If you're planning to start an import-export business in India, obtaining an Import Export Code (IEC) is mandatory. 
                The IEC is a unique 10-digit code issued by the Directorate General of Foreign Trade (DGFT) and is necessary for importers and
                 exporters to conduct business in India. We offer professional services to help you easily obtain your IEC and start your import-export business.
                </p>
                <p>
                Benefits of IEC Registration::
                </p>
                  <ol>
                    <li>
                    Global Reach
                    </li>
                    <p> With an IEC, you can conduct business with clients and suppliers from all over the world, increasing your business's reach and potential. </p>
                    <li>
                    Avail Benefits
                    </li>
                    <p>You can avail several benefits like export promotion council, Duty drawback, GST refund and more.</p>
                    <li>
                    Easy Processing
                    </li>
                    <p>
                    With our professional services, the IEC registration process becomes effortless and straightforward.
                    </p>
                    <li>
                    Hassle-free Customs Clearance
                    </li>
                    <p>
                    Customs clearance becomes hassle-free with an IEC, allowing for smooth import-export operations.
                    </p>
                  </ol>
              </div>
              <div className={styles.right}>
                <picture>
                  <img
                    src="/img/import_export_code_1.jpg"
                    alt="kids"
                    height="300px"
                    className={styles.img}
                  />
                </picture>
              </div>
          </div>



          <div className={styles.miniContent}>
              <div className={`${styles.left} ${styles.flex1}`}>
                <h4>Our Services</h4>
                <p>
                We provide end-to-end services to help you with your IEC registration process. 
                Our team of experts will guide you through the entire process and ensure that your application is correctly filled out and submitted on time. Our services include:
                </p>
                  <ol>
                    <li>
                    Consultation
                    </li> <p>Our team of experts will consult with you to understand your business needs and help you determine the best category and type of IEC for your business.</p>
                    <li>
                    Documentation
                    </li><p>We will assist you in preparing all the necessary documents required for IEC registration, such as PAN card, passport, GST registration, bank details, and more.</p>
                    <li>
                    Application Filing
                    </li><p>Our experts will file your IEC application with the DGFT and ensure that all details are correctly filled out.</p>
                    <li>
                    Follow-up and Status Updates
                    </li><p>We will keep track of your IEC application and provide you with regular updates on its status.</p>
                    <li>
                    Improved Employee Morale
                    </li><p>ISO certification can improve employee morale by creating a culture of quality, safety, and environmental responsibility, and by providing clear guidelines for performance and accountability.</p>
                    <li>
                    Compatetive Price
                    </li><p>
                      We provide these all service at very affortabloe rate.
                    </p>
                  </ol>
                  <p>
                  Don't let the process of IEC registration be a barrier to your import-export business's growth. Contact us today to take advantage of our professional services and start your IEC registration process today.
                  </p>
              </div>
              <div className={styles.right}>
                <picture>
                  <img
                    src="/img/import_export_code_2.jpg"
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

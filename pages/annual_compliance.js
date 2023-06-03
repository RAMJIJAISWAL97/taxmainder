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
            src="/img/complaince.jpg"
            alt="kids"
            className={styles.img}
          />
        </picture>
        <div className={styles.content}>
          <h1><b>Annual Compliance</b></h1>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.leftContent}>

        <h2>Welcome to Annual Compliance Services</h2>
                <p>
                Running a business can be a challenging task and keeping up with all the legal requirements can be overwhelming. Our Annual Compliance Services are designed to help businesses of all sizes stay compliant with the legal regulations.

                Our team of experts understands the importance of timely compliance and provides end-to-end solutions to help you comply with all the necessary laws and regulations. We offer a range of services to help you manage your compliance requirements, including:
                </p>

          <div className={styles.miniContent}>
              <div className={`${styles.left} ${styles.flex1}`}>
                <h4><p>
                Our Company Compliance Services include:
                </p> </h4>
                  <ol>
                    <li>
                    Annual ROC Filings
                    </li>
                    <p> Our team of experts will assist you in filing the Annual Return and the Annual Financial Statements with the Registrar of Companies (ROC) as per the Companies Act, 2013.</p>
                    <li>
                    Annual GST Filings
                    </li>
                    <p>Our GST experts will help you file your Annual GST Returns as per the Goods and Services Tax (GST) Act, 2017.

                    </p>
                    <li>
                    Annual Income Tax Filings
                    </li>
                    <p>
                    Our team of experts will assist you in filing your Annual Income Tax Returns with the Income Tax Department as per the Income Tax Act, 1961.
                    </p>

                    <li>
                    Maintenance of Statutory Registers
                    </li>
                    <p>
                    Our team will help you maintain all the necessary statutory registers and records as required by the Companies Act, 2013.
                    </p>

                    <li>
                    Other Compliance Services
                    </li>
                    <p>
                    We also provide other compliance-related services such as change in directors, shareholding pattern, etc.
                    </p>
                </ol>
                <p>
                At our firm, we understand the importance of timely compliance and we ensure that all the necessary filings are done well within the stipulated timelines. Our team of experts is always up-to-date with the latest laws and regulations, and we ensure that your compliance needs are always taken care of.
                </p>
                <p>
                Contact us today to learn more about how our Annual Compliance Services can benefit your business!
                </p>
              </div>
              
              <div className={styles.right}>
                <picture>
                  <img
                    src="/img/annual_compliance.jpg"
                    alt="kids"
                    height="300px"
                    className={styles.img_side}
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

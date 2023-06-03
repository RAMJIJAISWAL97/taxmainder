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
          <h1><b>Company Compliance</b></h1>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.leftContent}>

        <h2>Company Compliance Services</h2>
                <p>
                Welcome to Taxmainder, your one-stop solution for all company compliance services.

                We understand that compliance can be a daunting task, and with ever-changing regulations, it can be challenging to stay up-to-date. That is why we are here to help you with all your compliance needs, from company registration to annual compliance filings.

                Our team of experts has years of experience in handling compliance-related matters for companies across various industries. We provide customized solutions that cater to your specific needs, ensuring that your business complies with all the relevant laws and regulations.
                </p>

          <div className={styles.miniContent}>
              <div className={`${styles.left} ${styles.flex1}`}>
                <h4><p>
                Our Company Compliance Services include:
                </p> </h4>
                  <ol>
                    <li>
                    Company Registration
                    </li>
                    <p> We offer end-to-end solutions for company registration, including obtaining Director Identification Number (DIN), Digital Signature Certificate (DSC), and other necessary registrations and approvals.</p>
                    <li>
                    Annual Compliance Filings
                    </li>
                    <p>We help you stay compliant with all the annual filing requirements, including filing of Annual Returns, Financial Statements, and other necessary documents.

                    </p>
                    <li>
                    Compliance Audit
                    </li>
                    <p>
                    Our experts conduct compliance audits to identify any potential compliance gaps and help you take corrective actions.
                    </p>

                    <li>
                    ROC Filings
                    </li>
                    <p>
                    We assist you in filing necessary forms with the Registrar of Companies, including Form MGT-7, AOC-4, ADT-1, and other statutory forms.
                    </p>

                    <li>
                    Secretarial Services
                    </li>
                    <p>
                    If you wish to wind up your LLP, our team can assist you with completing all the formalities, filing the necessary documents, and fulfilling all legal obligations.
                    </p>
                </ol>
                <p>
                At taxmainder, we believe in providing personalized services that cater to your specific needs. Our experts work closely with you to understand your requirements and provide customized solutions that meet your compliance needs.
                </p>
                <p>
                Contact us today to schedule a consultation with our compliance experts and get started on your compliance journey.
                </p>
              </div>
              
              <div className={styles.right}>
                <picture>
                  <img
                    src="/img/company_complaince.jpg"
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

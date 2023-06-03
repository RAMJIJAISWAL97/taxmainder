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
            src="/img/company_closure.jpg"
            alt="kids"
            className={styles.img}
          />
        </picture>
        <div className={styles.content}>
          <h1><b>Company Closure</b></h1>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.leftContent}>

        <h2>Welcome to our Company Closure Services</h2>
                <p>
                Are you planning to close your company? Do you want a hassle-free and cost-effective way to do it? Look no further! We provide comprehensive company closure services to help you close your company smoothly and efficiently.
                </p>

                <p>
                Our team of experts has years of experience in handling company closure procedures and can guide you through the entire process. We provide end-to-end support to ensure that your company closure process is completed without any legal or financial hassles.
                </p>

          <div className={styles.miniContent}>
              <div className={`${styles.left} ${styles.flex1}`}>
                <p>
                Our Services
                </p>
                  <ol>
                    <li>
                    Closure of Private Limited Company
                    </li>
                    <li>
                    Closure of LLP (Limited Liability Partnership)
                    </li>
                    <li>
                    Winding up of Partnership Firms
                    </li>
                    <li>
                    Closure of One Person Company (OPC)
                    </li>
                    <li>
                    Striking off the Company from the Register of Registrar of Companies (ROC)
                    </li>
                  </ol>
              </div>
              <div className={styles.right}>
                <picture>
                  <img
                    src="/img/company_closure_1.jpg"
                    alt="kids"
                    height="300px"
                    className={styles.leftContentImg}
                  />
                </picture>
              </div>
          </div>
          

          <div className={styles.miniContent}>
              <div className={`${styles.left} ${styles.flex1}`}>
                <h4>Our Process </h4>
                  <h5>Our experienced team of experts can help you with the following aspects of company closure:</h5>
                  <ol>
                    <li>
                    Closure Procedures
                    </li> <p>
                    We will guide you through the entire process of closing your company, including the steps involved, the documents required, and the timelines to be followed. We will ensure that all the legal requirements are met and the closure is done in compliance with the relevant laws and regulations.
                    </p>
                    <li>
                    Tax Clearance
                    </li> <p>
                    Before closing your company, you need to obtain tax clearance from the relevant authorities. Our team will assist you in obtaining tax clearance certificates from the Income Tax Department, GST Department, and any other relevant authorities.
                    </p>
                    <li>
                    Asset Liquidation
                    </li> <p>
                    If your company has any assets that need to be liquidated, we can help you with the process. We will assist you in selling the assets and distributing the proceeds among the shareholders as per the legal requirements.
                    </p>
                    <li>
                    Closing Accounts.
                    </li> <p>
                    We will help you in closing the company's bank accounts, settling any outstanding debts, and making the final payments to employees and creditors.
                    </p>
                    <li>
                    Final Filings
                    </li> <p>
                    After the company closure, you need to file the necessary documents with the Registrar of Companies and other relevant authorities. We will assist you in filing the final tax returns, annual returns, and other necessary documents.
                    </p>
                  </ol>
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
                  
        <p> If you have decided to close your company, it is important to understand the legal requirements and procedures involved. Failing to follow the proper steps can result in penalties and legal consequences. At Taxmainder, we provide professional and reliable company closure services to make the process smooth and hassle-free.</p>
        <p>Closing a company can be a complex and time-consuming process, but with our professional assistance, you can be assured of a smooth and hassle-free closure. Contact us today to learn more about our company closure services and how we can help you. </p>
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

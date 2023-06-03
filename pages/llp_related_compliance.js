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
          <h1><b>LLP Compliance</b></h1>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.leftContent}>

        <h2>LLP Compliance Services</h2>
                <p>
                As a Limited Liability Partnership (LLP), you have certain legal obligations that must be met to maintain compliance with government regulations. 
                At our firm, we provide a range of LLP-related compliance services to ensure that you remain compliant with all relevant laws and regulations.
                </p>

          <div className={styles.miniContent}>
              <div className={`${styles.left} ${styles.flex1}`}>
                <h4><p>
                Our LLP-related compliance services include:
                </p> </h4>
                  <ol>
                    <li>
                    LLP Registration
                    </li>
                    <p> We can help you register your LLP with the Ministry of Corporate Affairs (MCA). Our team will assist you with preparing and filing all necessary documents and completing all required formalities.</p>
                    <li>
                    LLP Annual Compliance
                    </li>
                    <p>As an LLP, you are required to file annual returns with the MCA to remain compliant. Our team can help you prepare and file these returns on time, ensuring that you avoid any penalties or legal consequences.

                    </p>
                    <li>
                    LLP Tax Compliance
                    </li>
                    <p>
                    LLPs are required to pay various taxes, including income tax, GST, and TDS. Our team can assist you with meeting all your tax obligations, including filing tax returns, paying taxes, and obtaining any necessary tax registrations.
                    </p>

                    <li>
                    LLP Compliance Audit
                    </li>
                    <p>
                    Our LLP compliance audit services can help you identify any areas of non-compliance in your LLP and develop strategies to address them. Our team will review your LLP's financial records, legal documents, and other relevant information to ensure that you are meeting all applicable regulations.
                    </p>

                    <li>
                    LLP Winding Up
                    </li>
                    <p>
                    If you wish to wind up your LLP, our team can assist you with completing all the formalities, filing the necessary documents, and fulfilling all legal obligations.
                    </p>
                </ol>
                <p>
                At our firm, we understand that LLP-related compliance can be a complex and time-consuming process. That's why we are here to help you meet all your legal obligations and stay compliant with all applicable regulations. Contact us today to learn more about our LLP-related compliance services and how we can help you ensure your LLP's compliance.
                </p>
              </div>
              
              <div className={styles.right}>
                <picture>
                  <img
                    src="/img/llp_complaince_1.jpg"
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

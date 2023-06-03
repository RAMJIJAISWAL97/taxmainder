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
          <h1><b>Other Compliance Services</b></h1>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.leftContent}>

        <h2>Welcome to Other Compliance Services</h2>
                <p>
                In addition to the various compliance services we offer, we also provide a range of other services to help you stay on top of your business obligations. Our team of experienced professionals can provide you with expert advice and guidance on a range of regulatory and legal compliance issues, including
                </p>

          <div className={styles.miniContent}>
              <div className={`${styles.left} ${styles.flex1}`}>
                <p>
                Other Compliance Services
                </p>
                  <ol>
                    <li>
                    Labour Law Compliance
                    </li>
                    <p> 
                    We can help ensure that your business is fully compliant with all relevant labour laws, regulations, and guidelines. Our team can help you with a range of issues related to labour law compliance, including:
                    </p> 
                        <ul>
                            <li>
                            Ensuring that your HR policies and practices are in line with the latest regulations
                            </li>
                            <li>
                            Advising on compliance requirements for minimum wages, working hours, and other labour-related regulations
                            </li>
                            <li>
                            Conducting labour law audits to identify areas of non-compliance and providing recommendations for remediation
                            </li>
                        </ul>

                    <li>
                    Environmental Compliance
                    </li>
                    <p> 
                    Environmental regulations can be complex and constantly evolving, making it difficult for businesses to stay on top of their obligations. We can help you with a range of environmental compliance issues, including:
                    </p> 
                        <ul>
                            <li>
                            Identifying and assessing your environmental risks and liabilities
                            </li>
                            <li>
                            Advising on compliance requirements for air and water quality, hazardous waste management, and other environmental regulations
                            </li>
                            <li>
                            Developing and implementing environmental management systems and sustainability plans
                            </li>
                        </ul>
                    <li>
                    Intellectual Property Compliance
                    </li>
                    <p> 
                    Intellectual property (IP) is a valuable asset for any business, and it's important to ensure that your IP rights are protected. We can help you with a range of IP compliance issues, including:
                    </p> 
                        <ul>
                            <li>
                            Conducting IP audits to identify and protect your intellectual property assets
                            </li>
                            <li>
                            Advising on compliance requirements for trademarks, patents, and other IP rights
                            </li>
                            <li>
                            Developing and implementing IP management strategies to help you leverage your IP assets for business growth
                            </li>
                        </ul>
                    <li>
                    Data Privacy and Cybersecurity Compliance
                    </li>
                    <p> 
                    Data privacy and cybersecurity are critical issues for any business that handles sensitive information. We can help you with a range of data privacy and cybersecurity compliance issues, including:
                    </p> 
                        <ul>
                            <li>
                            Conducting privacy and security audits to identify risks and vulnerabilities.
                            </li>
                            <li>
                            Developing and implementing privacy policies, data breach response plans, and incident management procedures.
                            </li>
                            <li>
                            Advising on compliance requirements for data privacy regulations, such as GDPR, CCPA, and HIPAA.
                            </li>
                        </ul>
                  </ol>

              </div>
              <div className={styles.right}>
                
                <picture>
                  <img
                    src="/img/other_compliance_services_1.jpg"
                    alt="kids"
                    height="300px"
                    className={styles.img_side}
                  />
                </picture>
            
                <picture>
                  <img
                    src="/img/other_compliance_services_2.jpg"
                    alt="kids"
                    height="300px"
                    className={styles.img_side}
                  />
                </picture>

              </div>

          </div>

          <p> 
            At Taxmainder, we understand the challenges of staying compliant with the ever-changing regulatory landscape. That's why we offer a comprehensive range of compliance and other services to help you manage your obligations and protect your business. Contact us today to learn more about how we can help you.
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

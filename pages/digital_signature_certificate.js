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
            src="/img/digital_signature_certificate.jpg"
            alt="kids"
            className={styles.img}
          />
        </picture>
        <div className={styles.content}>
          <h1><b>Digital Signature</b></h1>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.leftContent}>
          <h4>Digital Signature Certification</h4>
          <p>
          A digital signature certification is a digital certificate that is used to verify the authenticity of electronic documents and transactions. 
          The certification is issued by a trusted third-party service provider or a certification authority and contains information about the certificate holder, 
          issuer, and the digital signature itself. The certification serves as proof that the digital signature belongs to the certificate holder and that 
          the electronic document has not been tampered with.
          </p>
          <div className={styles.miniContent}>
            <div className={`${styles.left} ${styles.flex1}`}>
                <h4>Our Digital Signature Certification Services</h4>
                <p>At taxmainder, we offer digital signature certification services that are designed to meet the needs of businesses and individuals. Our services include</p>
                <ol>
                  <li> Digital Signature Certificates

                  </li>
                  <p> We provide digital signature certificates that are compliant with industry standards and can be used for various electronic transactions, such as e-filing of tax returns, e-tendering, and online banking.
                  </p>
                  <li> Certificate Renewal
                  </li>
                  <p> We offer certificate renewal services to ensure that your digital signature remains valid and up-to-date.
                  </p>
                   <li> Revocation and Suspension
                  </li>
                  <p> We provide revocation and suspension services for digital signatures that have been compromised or are no longer needed.
                  </p>
                  <li> Support and Maintenance
                  </li>
                  <p> We offer support and maintenance services to help you with any issues or concerns related to your digital signature certification.
                  </p>
                </ol>
            </div>
            <div className={styles.right}>
              <picture>
                <img
                  src="/img/digital_signature_certificate_1.jpg"
                  alt="kids"
                  height="300px"
                  className={styles.leftContentImg}
                />
              </picture>
            </div>
          </div>


          <div className={styles.miniContent}>
            <div className={`${styles.left} ${styles.flex1}`}>
                <h4>Why Choose Us?</h4>
                <ol>
                  <li> Trusted and Reliable

                  </li>
                  <p> Our digital signature certification services are trusted and reliable, ensuring that your electronic transactions are secure and compliant with industry standards.
                  </p>
                  <li> Experienced Professionals
                  </li>
                  <p> Our team of experienced professionals have years of experience in digital signature certification, providing you with expert advice and guidance.
                  </p>
                   <li> Personalized Services
                  </li>
                  <p> We understand that every client's needs are unique. That's why we provide personalized services that are tailored to your specific requirements.
                  </p>
                  <li> Competitive Pricing
                  </li>
                  <p> We offer our services at competitive prices, ensuring that you receive high-quality services without breaking the bank.
                  </p>
                  <li> Customer Satisfaction
                  </li>
                  <p> We prioritize customer satisfaction and strive to provide the highest level of customer service and support. Our goal is to make the process of obtaining and maintaining your digital signature certification as simple and hassle-free as possible.
                  </p>
                </ol>
              </div>
            <div className={styles.right}>
              <picture>
                <img
                  src="/img/digital_signature_certificate_2.jpg"
                  alt="kids"
                  height="300px"
                  className={styles.leftContentImg}
                />
              </picture>
            </div>
          </div>
            <p> 
            At taxmainder, we provide digital signature certification services that are trusted, reliable, and compliant with industry standards. Contact us today to learn more about our services and how we can help you secure your electronic transactions.
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

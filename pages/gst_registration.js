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
            src="/img/gst_registration.jpg"
            alt="kids"
            className={styles.img}
          />
        </picture>
        <div className={styles.content}>
          <h1><b>GST Registration</b></h1>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.leftContent}>
          <div className={styles.miniContent}>
            <div className={`${styles.left} ${styles.flex1}`}>
              <h4><li>GST Registration</li></h4>
              <p>
              Goods and Services Tax (GST) is an indirect tax that was introduced in India in 2017 to replace multiple taxes levied by the state and central governments. 
              It is mandatory for businesses with an annual turnover of more than Rs. 20 lakhs to register for GST. GST registration is essential to carry out business operations 
              smoothly and legally in India.
              </p>
            </div>
            <div className={styles.right}>
            </div>
          </div>
          <div className={styles.miniContent}>
            <div className={`${styles.left} ${styles.flex1}`}>
              <h4><li>Why GST registration?</li></h4>
              <p>
              GST registration is important for several reasons, including:
              </p>
              <ol>
                <li>
                Legal Requirement
                </li> 
                <p>
                As per the GST Act, businesses with an annual turnover of more than Rs. 20 lakhs (Rs. 10 lakhs for businesses in special category states) are required to register for GST. Failure to comply with this requirement can result in penalties, fines, and legal consequences.
                </p>
                <li>
                Input Tax Credit (ITC)
                </li> 
                <p>
                GST registration enables businesses to claim input tax credit (ITC) on the GST paid on their purchases. This helps businesses reduce their overall tax liability and improve their cash flow.
                </p>
                <li>
                Inter-State Trade
                </li> 
                <p>
                GST registration is mandatory for businesses that engage in inter-state trade or supply of goods and services. Without GST registration, businesses cannot avail the benefits of input tax credit and may face legal consequences.
                </p>
                <li>
                Business Expansion
                </li> 
                <p>
                GST registration is essential for businesses that plan to expand their operations beyond their home state. Registration enables businesses to comply with the GST regulations in other states and simplifies the process of inter-state trade.
                </p>
                <li>
                Compliance
                </li> 
                <p>
                GST registration ensures that businesses comply with all relevant tax laws and regulations. This helps businesses avoid penalties, fines, and legal consequences and build a positive reputation among customers and stakeholders.
                </p>
              </ol>
              <p>
              GST registration is important to comply with the legal requirements, claim input tax credit, engage in inter-state trade, expand your business, and maintain compliance with tax laws and regulations.
              </p>
            </div>
            <div className={styles.right}>
              <picture>
                <img
                  src="/img/gst_registration_1.jpg"
                  alt="kids"
                  height="300px"
                  className={styles.img_side}
                />
              </picture>
            </div>
          </div>
          <div className={styles.miniContent}>
            <div className={`${styles.left} ${styles.flex1}`}>
                <h4><li>Document Required</li></h4>
                <p>
                The list of documents required for GST registration may vary depending on the type of business entity and the nature of the business. However, in general, here is a list of the commonly required documents:
                </p>
                <ol>
                  <li>
                  PAN card of the business entity
                  </li>
                  <li>
                  Aadhaar card of the authorized signatory
                  </li>
                  <li>
                  Proof of business registration (e.g. Certificate of Incorporation, Partnership Deed, LLP Agreement)
                  </li>
                  <li>
                  Proof of business premises (e.g. Rent Agreement, Sale Deed, Property Tax Receipt)
                  </li>
                  <li>
                  Bank statement or canceled cheque of the business entity
                  </li>
                  <li>
                  Digital Signature Certificate (DSC) of the authorized signatory
                  </li>
                  <li>
                  Letter of Authorization or Board Resolution in case the application is filed by an authorized representative
                  </li>
                  <li>
                  Photographs of the authorized signatory and partners/directors/promoters
                  </li>
                  <li>
                  Details of the principal place of business, including address proof and rent agreement (if applicable)
                  </li>
                  <li>
                  Details of the additional places of business, including address proof and rent agreement (if applicable)
                  </li>
                  <li>
                  Proof of appointment of the authorized signatory
                  </li>
                  <li>
                  For proprietorship firms, proof of the proprietor's identity and address
                  </li>
                </ol>
            </div>

            <div className={styles.right}>
              <picture>
                <img
                  src="/img/gst_registration_2.jpg"
                  alt="kids"
                  height="300px"
                  className={styles.img_side}
                />
              </picture>
            </div>
          
          </div>
          <div className={styles.miniContent}>
            <div className={`${styles.left} ${styles.flex1}`}>
                <h4><li>Why Choose Us</li></h4>
                <ol>
                  <li>
                  Expertise in GST
                  </li>
                  <p>
                    Our team of experts has 8 years of experience in GST registration and related services. We stay up-to-date with the latest regulations and guidelines, so you can rest assured that your registration process will be compliant with all relevant laws. Whether you're a sole proprietor, partnership, or limited company, we have the knowledge and expertise to handle your GST registration with ease.
                  </p>
                  <li>
                  Post-Registration Support
                  </li>
                  <p>
                  Once your GST registration is complete, we don't just stop there. We offer ongoing support to ensure that you stay compliant with all GST regulations. This includes assistance with filing GST returns, maintaining accurate records, and responding to any queries or concerns you may have. We're committed to building long-term relationships with our customers and supporting your success.
                  </p>
                  <li>
                  Testimonials
                  </li>
                  <p>
                  Don't just take our word for it - here's what some of our satisfied customers have to say about our service
                  </p>
                  <li>
                  Competitive Price
                  </li>
                  <p>
                    We offer best price services.
                    Offering best discount!!!
                  </p>
                </ol>
            </div>
            <div className={styles.right}>
              <picture>
                <img
                  src="/img/gst_registration_3.jpg"
                  alt="kids"
                  height="300px"
                  className={styles.img_side}
                />
              </picture>
            </div>
          </div>
{/* 
          <div className={styles.miniContent}>
            <div className={`${styles.left} ${styles.flex1}`}>
              <h4><li>Hour Based Nurses (Four Hour Minimum)</li></h4>
              <p>
                Our daytime Newborn Baby care are perfect for the new or experienced parent who 
                wants an extra set of hands to help care for the new baby. Parents can rest, go to
                doctors’ appointments, spend time with siblings, After-school care, Care in groups,
                Late night/early morning request, Special occasion and get a little much-needed relief.
                Nannies Newborn baby care in Noida have been specially 
                selected from our experienced staff. They can also care for siblings when needed.
              </p>
            </div>
            <div className={styles.right}>
              <picture>
                <img
                  src="/img/blog2.jpg"
                  alt="kids"
                  height="300px"
                  className={styles.leftContentImg}
                />
              </picture>
            </div>
          </div>
 */}


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

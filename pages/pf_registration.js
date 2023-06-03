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
            src="/img/pf_registration.jpg"
            alt="kids"
            className={styles.img}
          />
        </picture>
        <div className={styles.content}>
          <h1>PF Registration</h1>
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.leftContent}>
          <h4>Provident Fund (PF)</h4>
          <p>
          The Provident Fund (PF) is a social security scheme provided by the government of India for the benefit of employees. 
          It is mandatory for all companies with 20 or more employees to register for the PF scheme. Registration for the PF scheme is a simple and straightforward process that can be completed online.
          </p>
          <h4>Benefits of PF:</h4>
          <p>
          The PF scheme provides several benefits to employees, such as retirement benefits, medical benefits, housing benefits, 
          and education benefits. In addition, employers can claim a tax deduction for their contributions to the PF scheme.
          </p>

          <div className={styles.miniContent}>
            <div className={`${styles.left} ${styles.flex1}`}>
              <h4>Documents required for PF registration:</h4>
              <ol>
                <li>
                PAN Card
                </li>
                <li>
                Aadhaar Card
                </li>
                <li>
                Bank account details
                </li>
                <li>
                Registration certificate of the company.
                </li>
                <li>
                Digital Signature Certificate (DSC) of authorized signatory
                </li>
              </ol>
            </div>
            <div className={styles.right}>
              <picture>
                <img
                  src="/img/pf_registration_2.jpg"
                  alt="kids"
                  height="300px"
                  className={styles.leftContentImg}
                />
              </picture>
            </div>
          </div>


          <div className={styles.miniContent}>
            <div className={`${styles.left} ${styles.flex1}`}>
            <h4>Benefits of PF</h4>
              <h5>The following are several benefits to Employee and Employer both :</h5>
              <ol>
                <li>
                Secure your employees future
                </li> 
                <p>
                By registering for the Provident Fund (PF) scheme, you are taking a crucial step towards securing your employees future. The PF scheme provides retirement benefits, medical benefits, housing benefits, and education benefits to employees, ensuring their financial security and well-being.
                </p>
                <li>
                Stay compliant with the law
                </li>
                <p>Registering for the PF scheme is not just good for your employees, it is also a legal requirement for companies with 20 or more employees. By staying compliant with the law, you can avoid legal complications and focus on growing your business.
                </p>
                <li>
                Save on taxes
                </li>
                <p>
                Employers can claim a tax deduction for their contributions to the PF scheme, reducing their tax liability. By registering for the PF scheme, you are not just investing in your employees future, but also saving on taxes.
                </p>
                <li>
                Hassle-free registration
                </li>
                <p> 
                Registering for the PF scheme is a simple and hassle-free process that can be completed online. Our team of experts can guide you through the process, ensuring that your registration is completed quickly and efficiently.
                </p>
                <li>
                Competitive advantage
                </li>
                <p> By providing PF benefits to your employees, you can differentiate yourself from your competitors and attract the best talent in the industry. A strong employee benefits package can also boost employee morale and productivity, leading to higher profits and growth for your business.
                </p>
              </ol>

              <h4>PF Registration Process</h4>
              <h5>The following are the steps to register for the PF scheme:</h5>
              <ol>
                <li>
                Visit the EPFO portal and select the "Establishment Registration" option.
                </li>
                <li>
                Enter the required details, such as company name, address, PAN, and Aadhaar number.
                </li>
                <li>
                Upload the necessary documents, including registration certificate, PAN card, Aadhaar card, and bank account details.
                </li>
                <li>
                Verify the details and submit the application.
                </li>
                <li>
                Once the application is processed, the PF registration number will be issued.
                </li>
              </ol>
            </div>
            <div className={styles.right}>
            <picture>
                <img
                  src="/img/pf_registration_3.jpg"
                  alt="kids"
                  height="300px"
                  className={styles.leftContentImg}
                />
              </picture>
              <picture>
                <img
                  src="/img/pf_registration_1.jpg"
                  alt="kids"
                  height="300px"
                  className={styles.leftContentImg}
                />
              </picture>
            </div>
          </div>

          <p>
            Registering for the PF scheme is an important legal requirement for companies with 20 or more employees. It provides several benefits to employees and employers alike, and the registration process is simple and can be completed online. So, register for the PF scheme today and secure the future of your employees!
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

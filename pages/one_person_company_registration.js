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
            src="/img/one_person_company_registration_1.jpg"
            alt="kids"
            className={styles.img}
          />
        </picture>
        <div className={styles.content}>
          <h1><b>Restister One Person Company</b></h1>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.leftContent}>

          <div className={styles.miniContent}>
            <div className={`${styles.left} ${styles.flex1}`}>
              <h2><li>Starting a new company has never been easier</li></h2>
              <p>
              Starting a new business is an exciting venture, but it can be overwhelming.
              Our new company registration services are tailored to meet the unique needs of each of our clients.
              We will guide you through the process and ensure that your new business is fully compliant with all legal requirements.
              Let us simplify the process of new company registration and get your business off the ground smoothly and efficiently.
              </p>
            </div>
            <div className={styles.right}>
              <picture>
                <img
                  src="/img/one_person_company_registration.jpg"
                  alt="kids"
                  height="300px"
                  className={styles.leftContentImg}
                />
              </picture>
            </div>
          </div>
          <div className={styles.miniContent}>
            <div className={`${styles.left} ${styles.flex1}`}>
              <h2><li>Do not let the paperwork and legal formalities of new company registration hold you back</li></h2>
              <p>
              Starting a new company involves a lot of paperwork and legal formalities that can be complex and time-consuming. 
              There are various legal requirements and regulations that must be met to register a new company, 
              including obtaining a business license, registering for taxes, and complying with labor laws.

              We will handle all the complicated process that involves a lot of paperwork and legal formalities. 
              By outsourcing this process to a professional service provider, entrepreneurs can avoid the hassle and stress
               of dealing with it themselves, and you can focus on growing their businesses.
              </p>
            </div>
            <div className={styles.right}>
              <picture>
                <img
                  src="/img/one_person_company_registration_2.jpg.jpg"
                  alt="panic"
                  height="300px"
                  className={styles.leftContentImg}
                />
              </picture>
            </div>
          </div>


          <h2>Are you ready to take the first step towards entrepreneurship?</h2>
          <p>
          Starting a new business can be an exciting and rewarding experience, but it can also be a daunting one.
          Many people hesitate to take the leap into entrepreneurship because they are unsure about the legal requirements and paperwork involved in registering a new company.

          However, with the help of professional new company registration services, aspiring entrepreneurs can easily overcome these 
          challenges and take the first step towards realizing their dreams. 
          By partnering with a trusted service provider, 
          entrepreneurs can ensure that their new business is set up properly and in compliance with all legal requirements.          </p>

          We Offer Professional new company registration services that offer a range of benefits to entrepreneurs, including:
          <ol>
            <h4><li>Expert guidance</li></h4>
                <p>Professional service providers have the expertise and experience to guide entrepreneurs through the process of new company registration.
                  They can help entrepreneurs understand the legal requirements and paperwork involved in starting a new business, and ensure that everything is done correctly.</p>

            <h4><li>Time savings</li></h4>
                <p>Registering a new company can be a time-consuming process, but with professional services, entrepreneurs can save time and focus on developing their business plans and strategies.
                  Service providers can handle all the paperwork and legal formalities, allowing entrepreneurs to launch their businesses more quickly.</p>

            <h4><li>Compliance assurance</li></h4>
                <p>New company registration involves compliance with various legal requirements and regulations.
                  Professional service providers can ensure that entrepreneurs meet all these requirements, minimizing the risk of legal issues or penalties down the line.</p>
            
            <h4><li>Peace of mind</li></h4>
                <p>Starting a new business can be stressful, but by partnering with a professional service provider, 
                  entrepreneurs can have peace of mind knowing that everything is taken care of properly.</p>
          </ol>
          
          Let us help you register your new company quickly and easily.

          <h4><b>Make your dream of starting a business a reality with our hassle-free new company registration services!
          </b></h4>

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

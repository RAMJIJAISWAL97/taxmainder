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
            src="/img/trademark_objection.jpg"
            alt="kids"
            className={styles.img}
          />
        </picture>
        <div className={styles.content}>
          <h1><b>Trademark Objection Services</b></h1>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.leftContent}>

        <h2>Trademark Objection Services</h2>
                <p>
                If you have received a trademark objection notice, it is important to act quickly to protect your brand. At our firm, 
                we offer trademark objection services to help you overcome objections and protect your trademark rights.
                </p>

          <div className={styles.miniContent}>
              <div className={`${styles.left} ${styles.flex1}`}>
                <h4><p>
                Why You Need Our Trademark Objection Services?
                </p> </h4>
                <p>Trademark objections can be filed by the Trademark Registrar or by third parties who believe that your mark is not distinctive or infringes on their own trademark rights. Failing to address objections can result in the rejection of your trademark application, legal disputes, and the loss of your exclusive rights to use your mark.</p>
                <p>Our Trademark Objection Process </p>
                  <ol>
                    <li>
                    Assessment of the objection notice
                    </li>
                    <p> We assess the objection notice and identify the grounds for the objection.</p>
                    <li>
                    Response preparation
                    </li>
                    <p>We prepare a comprehensive response to the objection notice, addressing each ground of objection and providing evidence to support the distinctiveness of your mark.

                    </p>
                    <li>
                    Filing of response
                    </li>
                    <p>
                    We file the response with the Trademark Registry and closely monitor the progress of your application.
                    </p>
                    <li>
                    Objection hearing
                    </li>
                    <p>
                    If necessary, we represent you in any hearing with the Trademark Registrar to argue your case and overcome the objection.
                    </p>
                    <li>
                    Trademark registration
                    </li>
                    <p>
                    Once the objection is successfully overcome, we ensure that your trademark is registered and protected under the law.
                    </p>
                </ol>
              </div>
              
              <div className={styles.right}>
                <picture>
                  <img
                    src="/img/trademark_renewal_1.jpg"
                    alt="kids"
                    height="300px"
                    className={styles.img_side}
                  />
                </picture>
              </div>
          </div>
          
                  
        <p>Protect your brand and legal rights by addressing trademark objections with our trademark objection services. Contact us today to learn more about how we can help you overcome objections and protect your trademark rights.</p>

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

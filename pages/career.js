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
          We are hiring.
        </picture>
        <div className={styles.content}>
          <h1>Nanny Sitter Service</h1>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.leftContent}>
          <h4>We are hiring across multiple role in legal and accounting domain!!</h4>
          <p>
            Please share your resume with us we will contact you shortly.
          </p>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf7gHzkmY1N0Sx7PkOMdHlXvMTAkKdL0FRixUJIEj8BUnTCmw/viewform?embedded=true" width="640" height="956" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          <div className={styles.miniContent}>
            <div className={`${styles.left} ${styles.flex1}`}>
              <h4>Responsibility of Nanny:</h4>
                <ul>
                    1. Organize Interesting activities and education games for childres.
                </ul>
                <ul>
                    2. Change diapers, bath children and if children do potty then we clean them 
                    (Means we take whole responsibility to take care of your child).
                </ul>
                <ul>
                    3. Teach children appropriate behaviour and how to respect their elders etc.
                </ul>
                <ul>
                    4. Take responsibility of your child while going inside and outside of home.
                </ul>
            </div>
          </div>
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


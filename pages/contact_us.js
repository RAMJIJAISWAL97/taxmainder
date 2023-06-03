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

        <a href="tel:+919839887300" className="phone-icon"><i className="fa fa-phone"></i>+919839887300</a>

      </div>
      
    </Layout>
  );
}

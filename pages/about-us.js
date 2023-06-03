import Headings from "components/Headings";
import Layout from "Layout/Layout";
import Link from "next/link";
import styles from "styles/About.module.css";

export default function AboutUs() {
  return (
    <Layout header footer notification>
      <div className={styles.container}>
        <picture>
          <img src="/img/kids.jpg" alt="kids" className={styles.img} />
        </picture>
        <div className={styles.content}>
          <h1>About Us</h1>
        </div>
      </div>
      <div className={styles.header}>
        <h1>WELCOME TO MOTHER TOUCH SERVICES</h1>
        <p>
          Mother Touch Services is a leading organization to provide the best
          caretaker in Noida. If you are seeking caretaker for Baby in Noida ,
          “Mother Touch Services” is best caretaker services in Noida for your
          baby loved ones.
        </p>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.leftContent}>
          <picture>
            <img
              src="/img/kids.jpg"
              alt="kids"
              className={styles.leftContentImg}
            />
          </picture>
          <p>
            Our main motto is to satisfy our Customers to the best of our
            ability and we endeavor to regularly improve our service quality by
            fulfill the changing requirements of our client's loved ones. We
            used to provide trained personal and best Caretaker services in
            Noida & aims to be the best caretaker service provider in Noida. Our
            employees are selected and being employed directly by us and we used
            to provide proper training to caregiver before placing them for
            serving our client. We used to do extensive reference check as well
            as background verification to ensure and confirm proof of identity.
            Everyone expecting the best caretaker service for their loved ones
            with the best possible price, and we used to provide best possible
            Patient Caretaker in Noida at your door step. Our Senior citizen
            Caretaker in Noida services is one of the best Caretaker services in
            Noida. In Today's lifestyle, a working woman wants to the best
            Caretaker or baby sitter for their new born baby. Mother Touch
            Services is Noida most reputed Caretaker, housekeeping and maid
            services provider organization. New Born baby needs to handle very
            softly and our trained professionals caretaker or maid provides
            their services in Noida. We used to provide premier, friendly,
            reliable maternity care in Noida to the most sensitive, clientele
            with all the requirements. With every child who need Caretaker,
            safety&satisfaction is the most important, which we used to give to
            our best level. Not only to child or senior citizen we used to
            provide patient caretaker in Noida along all services. We take care
            of your loved ones like our own. Mother touch services believe to
            deliver Patient Caretaker in Noida for taking care of your old
            parents who need helps after you are going to office. Our experience
            and trained professionals also provide their services to new born
            baby and care of those babies carefully. You do not needs to worry
            about your parents, our patient caretaker in Noida provide caretaker
            services.
          </p>
          <div className={styles.miniContent}>
            <div className={`${styles.left} ${styles.flex1}`}>
              <h4>Best Baby Caretker Services In Noida</h4>
              <p>
                A New born Baby care in Noida for your children in your home and
                will provide them with a stimulating and safe environment in
                which to grow and develop. The primary role of a nanny is to
                care for your children. Our Nannie does all types of work like
                nurse duties, which usually involves looking after children and
                their belongings. Our New bore baby care in Noida services does
                children's laundry&cooking, keeping bedrooms.
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
        </div>
        <div className={styles.company}>
          <h4>Company</h4>
          <ul>
            <li>
              <Link href="">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>Mission & Vision</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>Who Are Our Care Specialist?</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

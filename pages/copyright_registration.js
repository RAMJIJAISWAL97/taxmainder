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
            src="/img/copyright_registration.jpg"
            alt="kids"
            className={styles.img}
          />
        </picture>
        <div className={styles.content}>
          <h1><b>Protect your Rights</b></h1>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.leftContent}>

        <h2>Copyright</h2>
                <p>
                Copyright is a legal right that grants creators of original works exclusive control over the use and distribution of their works. 
                Copyright protection covers a wide range of creative works, including literature, music, art, films, and software.
                </p>
                <p> 
                Copyright protection grants the creator exclusive rights to reproduce, distribute, display, and perform their work, 
                as well as to create derivative works based on the original. These rights enable creators to control how their works are used, and to profit from their creations.
                </p>
                <p>
                Copyright protection typically lasts for the life of the creator plus a certain number of years after their death, 
                depending on the jurisdiction. In the United States, for example, copyright protection generally lasts for the life of the creator plus 70 years.
                </p>
                <p>Copyright infringement occurs when someone uses a copyrighted work without permission from the copyright owner. This can include reproducing the work, distributing copies of it, 
                  performing it in public, or creating derivative works based on it. In many cases, copyright infringement is illegal and can result in legal action and damages.
                </p>

          <div className={styles.miniContent}>
              <div className={`${styles.left} ${styles.flex1}`}>
                <p>
                Copyright provides several advantages for creators and society as a whole, including:
                </p>
                  <ol>
                    <li>
                    Protection of Creative Works
                    </li>
                    <p> Copyright provides legal protection for creative works, such as music, literature, and art. This protection gives creators the exclusive right to control how their works are used and distributed, ensuring that they receive recognition and compensation for their creations. </p>
                    <li>
                    Encourages Innovation
                    </li>
                    <p>Copyright protection encourages innovation by providing creators with the incentive to produce new works. When creators know that they will be able to protect their works and profit from them, they are more likely to invest time, effort, and resources into creating new and innovative works.

                    </p>
                    <li>
                    Economic Benefits
                    </li>
                    <p>
                    Copyright protection can provide significant economic benefits for creators, industries, and economies. For example, copyright industries, such as the music and film industries, generate billions of dollars in revenue each year and provide employment opportunities for millions of people.

                    </p>
                    <li>
                    Cultural Preservation
                    </li>
                    <p>
                    Copyright protection can help preserve cultural heritage by encouraging the creation and preservation of works that reflect a particular culture or community. This can include traditional music, literature, and art forms that may be at risk of being lost over time.
                    </p>
                    <li>
                    Public Access
                    </li>
                    <p>
                    opyright law includes provisions that ensure that copyrighted works can be used for certain purposes, such as education, research, and criticism. These provisions ensure that important works are accessible to the public, while still providing protection for creators.
                    </p>
                  </ol>
                  <p>copyright protection plays a crucial role in promoting creativity, innovation, and cultural preservation, while also providing economic and social benefits.</p>
              </div>
              
              <div className={styles.right}>
                <picture>
                  <img
                    src="/img/copyright_registration_1.jpg"
                    alt="kids"
                    height="300px"
                    className={styles.img}
                  />
                </picture>
              </div>
          </div>
          

          <div className={styles.miniContent}>
              <div className={`${styles.left} ${styles.flex1}`}>
                <h4>Our Copyright Registration Process</h4>
                <p>
                Our copyright registration process is designed to be simple and straightforward. Here's how it works:
                </p>
                  <ol>
                    <li>
                    Consultation
                    </li> <p>We will schedule a consultation with you to discuss your creative work and the copyright registration process. During this consultation, we will answer any questions you may have and provide guidance on how to proceed.</p>
                    <li>
                    Application Preparation
                    </li><p>Our team will prepare the necessary application forms and gather all the required information and documentation.</p>
                    <li>
                    Filing
                    </li><p>Once the application is complete, we will file it with the appropriate copyright office on your behalf.</p>
                    <li>
                    Monitoring
                    </li><p>We will monitor the progress of your application and keep you updated on its status.</p>
                    <li>
                    Certificate Issuance
                    </li><p>Once your copyright registration is approved, we will provide you with a certificate of registration as proof of your legal protection.</p>
                  </ol>
              </div>

          </div>
                  
        <p> 
          At Trademark, we understand that your creative works are valuable and deserve legal protection. 
          That's why we offer copyright registration services to help you protect your intellectual property. 
          Our team of experienced professionals can guide you through the copyright registration process, 
          ensuring that your work is properly registered and protected.
        </p>
        <p>Protect your creative works with our copyright registration services. Contact us today to schedule a consultation and get started on the registration process.</p>

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

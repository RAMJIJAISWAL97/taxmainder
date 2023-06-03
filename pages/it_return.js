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
            src="/img/it_return.jpg"
            alt="kids"
            className={styles.img}
          />
        </picture>
        <div className={styles.content}>
          <h1>IT Return </h1>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.leftContent}>
          <h4>IT Return</h4>
          <p>
          Filing your income tax return (ITR) is a legal requirement for all taxpayers in India.
           It is a complex process that requires expertise and knowledge of tax laws and regulations. 
           We provide IT return filing services that make the process simple and hassle-free for you.
          </p>
          <div className={styles.miniContent}>
            <div className={`${styles.left} ${styles.flex1}`}>
              <h4>Benefits of IT return filing</h4>
              <h8>Filing your ITR has several benefits, such as:</h8>
                <ol>
                  <li>
                  Avoiding penalties
                  </li>
                  <p>
                  If you fail to file your ITR on time, you may be subject to penalties and fines by the Income Tax Department.
                  </p>
                  <li>
                  Claiming tax refunds
                  </li>
                  <p>
                  If you have paid excess tax, you can claim a tax refund by filing your ITR.
                  </p>
                  <li>
                  Applying for loans
                  </li>
                  <p>
                  Banks and financial institutions require ITR as proof of income when you apply for loans or credit cards.
                  </p>
                  <li>
                  Establishing financial credibility
                  </li>
                  <p>
                  Filing your ITR regularly establishes your financial credibility and can help you in various financial transactions.
                  </p>
              </ol>
            </div>


            <div className={`${styles.left} ${styles.flex1}`}>
              <h4>Our Services</h4>
              <h8>We offer a range of IT return filing services, including:</h8>
                <ol>
                  <li>
                  Preparation and filing of ITR
                  </li>
                  <p>
                  Our team of experts will prepare and file your ITR on your behalf, ensuring that all tax laws and regulations are complied with.
                  </p>
                  <li>
                  Advice on tax planning
                  </li>
                  <p>
                  We provide tax planning advice to help you save on taxes and maximize your deductions and exemptions.
                  </p>
                  <li>
                  Support during tax audits
                  </li>
                  <p>
                  In the event of a tax audit, we provide support and guidance to ensure that you comply with all tax laws and regulations.
                  </p>
                  <li>
                  Online filing
                  </li>
                  <p>
                  We provide online filing services, making the process of filing your ITR quick and easy.
                  </p>
              </ol>
            </div>

            <div className={styles.right}>
              <picture>
                <img
                  src="/img/it_return_1.jpg"
                  alt="kids"
                  height="300px"
                  className={styles.img_side}
                />
              </picture>
            </div>
          </div>
          <p>
          Filing your ITR is a crucial task that requires expertise and knowledge of tax laws and regulations. Our IT return filing services make the process simple and hassle-free for you, allowing you to focus on your business and personal life. Contact us today to file your ITR and enjoy the benefits of timely and accurate tax filing!
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

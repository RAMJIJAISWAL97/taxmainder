import Card from "components/Card";
import Headings from "components/Headings";
import VerticalLinearStepper from "components/Steppers";
import styles from "styles/Home.module.css";

export default function DetailedMotherServices() {
  return (
    <div className={styles.detailedWrapper}>
      <Headings
        title="YOU CAN KNOW ABOUT US"
        content="ABOUT MOTHER TOUCH SERVICES"
      />
      <div className={styles.servicesContainer}>
        <div className={styles.leftContainer}>
          <Card
            title="Our Vision"
            content="To advocate for and protect children and seniors by providing the highest quality of trained caregivers who offer a caring, and safe environment for your loved ones..."
            readMore
            src="/img/kids-care1.jpg"
          />
          <Card
            title="Mission Statement"
            content="Your peace of mind leaving your kids and loved ones with our caregivers is our greatest task We match families with screened, compassionate, trained, and reliable caregivers for children and seniors... "
            readMore
            src="/img/after-school.jpeg"
          />
        </div>
        <div className={`${styles.flexCenter}`}>
          <VerticalLinearStepper />
        </div>
      </div>
    </div>
  );
}

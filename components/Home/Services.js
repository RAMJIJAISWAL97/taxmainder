import Card from "components/Card";
import styles from "styles/Home.module.css";
import services from "Data/servicesData.json";

export default function Services() {
  return (
    <div className={styles.servicesWrapper}>
    
      {services.map((services, idx) => (
        <div key={idx} className={styles.service1}>
          <Card
            title={services.title}
            content={services.content}
            buttonTitle={services.buttonTitle}
            src={services.imageSrc}
            imageAlt={services.imageAlt}
            style={{ borderTopRightRadius: "100px" }}
          />
        </div>
      ))}
    </div>
  );
}

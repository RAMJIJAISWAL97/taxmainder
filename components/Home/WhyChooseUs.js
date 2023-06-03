import styles from "styles/WhyChooseStyles.module.css";


export default function WhyChooseUs({ title, content, icon }) {
  return (
    <div className={styles.wrapper}>
      <div className="whyImg">
    {icon}
      </div>
      <div className={styles.whyContent}>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}

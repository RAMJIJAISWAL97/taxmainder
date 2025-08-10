import styles from "styles/Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      <div className={styles.logoWrapper}>
        <img 
          src="/img/gst_seva_in.png" 
          alt="GST Seva Logo" 
          className={styles.logoImage}
        />
      </div>
    </div>
  );
}

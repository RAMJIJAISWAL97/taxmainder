import styles from "styles/Logo.module.css";

export default function Logo() {
  return (
    <div>
      <picture className={styles.logo}>
        <img src="img/logo.png" alt="Logo" />
      </picture>
    </div>
  );
}

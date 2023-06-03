import styles from "styles/Card.module.css";

export default function Card(props) {
  return (
    <div className={styles.cardWrapper} style={props.style}>
      <div className={styles.cardImage}>
        <picture>
          <img
            src={props.src}
            alt={props.imageAlt}
            style={props.style}
            height={2000}
          />
        </picture>
      </div>
      <div className={styles.CardContent}>
        <h2>{props.title}</h2>
        <p>
          {props.content}
          {props.readMore && (
            <a href="#" className={styles.anchor}>
              {" "}
              Read More
            </a>
          )}
        </p>
      </div>
      {!props.readMore && (
        <div className={styles.cardFooter}>
          <div className="btn">{props.buttonTitle}</div>
        </div>
      )}
    </div>
  );
}

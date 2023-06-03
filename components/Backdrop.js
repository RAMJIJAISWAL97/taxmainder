import styles from "styles/Drawer.module.css";

const Backdrop = (props) => (
    props.show ? <div className={styles.Backdrop} onClick={props.clicked}></div> : null
);

export default Backdrop;
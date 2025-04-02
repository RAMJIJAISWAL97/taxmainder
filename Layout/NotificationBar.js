import styles from "styles/NotificationBar.module.css";
import { Phone, WhatsApp, MailOutline } from "@mui/icons-material"; // Material UI icons

export default function NotificationBar() {
    return (
        <div className={styles.notificationWrapper}>
            <div className={styles.notificationContent}>
                {/* <div className={styles.contactInfo}> */}
                    {/* <div className={styles.contactItem}>
                        <Phone className={styles.icon} />
                        <span className={styles.contactText}>+1 234 567 890</span>
                    </div> */}
                    <div className={styles.contactItem}>
                        <WhatsApp className={styles.icon} />
                        <span className={styles.contactText}>  
                        <a href="https://wa.me/919999310415" target="_blank" rel="noopener noreferrer" >
                        +919999310415
                        </a>
                        </span>
                    </div>
                    {/* <div className={styles.contactItem}>
                        <MailOutline className={styles.icon} />
                        <span className={styles.contactText}>contact@domain.com</span>
                    </div> */}
                {/* </div> */}
            </div>
        </div>
    );
}

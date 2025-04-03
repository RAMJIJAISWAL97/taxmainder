import Link from "next/link";
import styles from "styles/Footer.module.css";
import quickLinks_1 from "Data/quickLinks_1.json";
import quickLinks_2 from "Data/quickLinks_2.json";
import quickLinks_3 from "Data/quickLinks_3.json";
import quickLinks_4 from "Data/quickLinks_4.json";
import ContactUs from "components/ContactUs";

export default function Footer() {
  return (
    <>
      <ContactUs />
      <div className={styles.footer}>
        <div className={styles.about}>
          <h3>Taxmainder </h3>
          <p><b>
          Office. No.20 1st floor VDS <br></br>market,
          Opposite Sector 52<br></br> Metro Gate No. 3 
          Sector 51<br></br> Noida U.P, India 201301 
          </b></p>
          <dev className={styles.footer_link}>
            <h3>
              <a rel="noopener" data-ux-btn="external" customborderwidth="small" data-ux="ButtonExternal" href="https://wa.me/919999310415" target="_blank" data-aid="CONTACT_INFO_WHATS_APP_REND" data-tccl="ux2.contact.whatsapp.click,click" icon="whatsApp" data-typography="false" className="x-el x-el-a c1-9q c1-j c1-2s c1-9r c1-9s c1-7q c1-9t c1-1j c1-30 c1-28 c1-29 c1-2a c1-2b c1-9u c1-9v c1-9w c1-9x c1-9y c1-9z c1-27 c1-a0 c1-1n c1-1o c1-23 c1-25 c1-24 c1-t c1-5l c1-a1 c1-4h c1-2p c1-a2 c1-a3 c1-1 c1-2 c1-a4 c1-a5 c1-a6 c1-a7 c1-a8 c1-a9 c1-aa c1-ab c1-ac c1-ad c1-ae"><span data-ux="Element" className="x-el x-el-span c1-j c1-9r c1-t c1-af c1-5a c1-21 c1-22"><span data-ux="Element" className="x-el x-el-span c1-ag c1-ah c1-32 c1-ai c1-33 c1-aj c1-3f c1-ak c1-al c1-9r c1-j"><svg viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px" data-ux="Icon" className="x-el x-el-svg c1-3q c1-1q c1-3t c1-9r c1-j"><svg viewBox="0 0 496 497"><defs><linearGradient id="a" x1="247.32" x2="247.32" y1="446.09" y2="39.9" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#20b038"></stop><stop offset="1" stopColor="#60d66a"></stop></linearGradient><linearGradient id="b" x1="247.32" x2="247.32" y1="453.37" y2="32.61" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#f9f9f9"></stop><stop offset="1" stopColor="#fff"></stop></linearGradient></defs><path d="M37.88 453.37l29.59-108A208 208 0 0 1 39.63 241.1c0-115 93.6-208.49 208.56-208.49a208.57 208.57 0 0 1 208.57 208.66c-.05 115-93.62 208.49-208.57 208.49h-.08a208.41 208.41 0 0 1-99.67-25.38zm115.68-66.73l6.34 3.75a173.18 173.18 0 0 0 88.23 24.16h.06c95.55 0 173.31-77.75 173.35-173.3A173.34 173.34 0 0 0 248.26 67.83c-95.62 0-173.38 77.73-173.42 173.28a172.94 172.94 0 0 0 26.5 92.23l4.13 6.55L88 403.84z"></path><path fill="url(#a)" d="M45.13 446.09l28.57-104.3a200.82 200.82 0 0 1-26.88-100.62c0-111 90.36-201.27 201.34-201.27A201.35 201.35 0 0 1 449.5 241.32c0 111-90.37 201.28-201.33 201.28h-.09a201.31 201.31 0 0 1-96.21-24.49z"></path><path fill="url(#b)" d="M37.88 453.37l29.59-108A208 208 0 0 1 39.63 241.1c0-115 93.6-208.49 208.56-208.49a208.57 208.57 0 0 1 208.57 208.66c-.05 115-93.62 208.49-208.57 208.49h-.08a208.41 208.41 0 0 1-99.67-25.38zm115.68-66.73l6.34 3.75a173.18 173.18 0 0 0 88.23 24.16h.06c95.55 0 173.31-77.75 173.35-173.3A173.34 173.34 0 0 0 248.26 67.83c-95.62 0-173.38 77.73-173.42 173.28a172.94 172.94 0 0 0 26.5 92.23l4.13 6.55L88 403.84z"></path><path fill="#fff" d="M196.07 153.94c-3.91-8.68-8-8.85-11.73-9-3-.14-6.51-.13-10-.13a19.15 19.15 0 0 0-13.89 6.52c-4.78 5.22-18.24 17.82-18.24 43.46s18.67 50.42 21.28 53.9 36.05 57.77 89 78.66c44 17.36 53 13.91 62.53 13s30.83-12.61 35.18-24.78 4.34-22.59 3-24.77-4.78-3.48-10-6.08-30.83-15.22-35.61-16.95-8.25-2.61-11.73 2.61-13.45 16.94-16.5 20.42-6.08 3.92-11.29 1.31-22-8.11-41.9-25.86c-15.5-13.82-26-30.87-29-36.09s-.32-8 2.29-10.63c2.34-2.34 5.21-6.09 7.82-9.13s3.47-5.21 5.21-8.69.87-6.52-.44-9.13-11.35-28.34-15.98-38.64z"></path></svg></svg></span><span data-ux="Element" className="x-el x-el-span iconText c1-j c1-9r c1-4f c1-1o c1-am c1-5a c1-21 c1-22">+919999310415</span></span></a>
            </h3>
            <h3> <a href="tel:+911143108573" className="phone-icon"><i className="fa fa-phone"></i>+911143108573</a></h3>  
            <h3><b>taxmainder@gmail.com</b></h3>
          </dev>
        </div>
        <div className={styles.links}>
          <h3>Start New Business</h3>

          {quickLinks_1.map((link, idx) => (
            <Link key={idx} href={link.href}>
              <a><b>{link.content}</b></a> 
            </Link>
          ))}
        </div>
        <div className={styles.links}>
          <h3>Governement Registration</h3>
          {quickLinks_2.map((link, idx) => (
            <Link key={idx} href={link.href}>
              <a><b>{link.content}</b></a> 
            </Link>
          ))}
        </div>
        <div className={styles.links}>
          <h3>Intellectual Proprty Right</h3>
          {quickLinks_3.map((link, idx) => (
            <Link key={idx} href={link.href}>
              <a><b>{link.content}</b></a> 
            </Link>
          ))}
        </div>
        <div className={styles.links}>
          <h3>Tax/Complaince</h3>
          {quickLinks_4.map((link, idx) => (
            <Link key={idx} href={link.href}>
              <a><b>{link.content}</b></a> 
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

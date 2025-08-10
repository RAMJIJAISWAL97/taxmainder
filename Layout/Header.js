import styles from "styles/navbar.module.css";
import navLinks from "Data/navbarData.json";
import Link from "next/link";
import NotificationBar from "./NotificationBar";
import Logo from "./Logo";
import MenuItems from "components/MenuItems";
import Drawer from "components/Drawer"
import { useState, useEffect } from "react";

export const Header = (props) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.navbar}>
          {props.notification}

          <div className={styles.navArea}>
            <Link href="/" className={styles.logoLink}>
              <Logo />
            </Link>
            
            <NotificationBar />
            
            <nav className={styles.desktopNav}>
              <ul className={styles.menus}>
                {navLinks.map((menu, idx) => {
                  const depthLevel = 1;
                  return <MenuItems items={menu} key={idx} depthLevel={depthLevel} />;
                })}
              </ul>
            </nav>

            <div className={styles.mobileNav}>
              <Drawer clicked={props.drawerToggleClicked} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

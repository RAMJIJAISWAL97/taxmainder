import React from "react";
import classes from "styles/Drawer.module.css";
import MenuItems from "components/MenuItems";
import navLinks from "Data/navbarData.json";
import Backdrop from "./Backdrop";
// import Backdrop from "";

const SideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <nav>
          <ul className="side-menus">
            {navLinks.map((menu, idx) => {
              // let className = styles.normalLink;
              // if (link.standout) className = styles.standoutLink;
              // if (props.currentRoute === link.path) className = styles.activeLink;
              const depthLevel = 0;
              return (
                <MenuItems items={menu} key={idx} depthLevel={depthLevel} />
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SideDrawer;

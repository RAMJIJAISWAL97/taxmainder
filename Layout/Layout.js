import SideDrawer from "components/SideDrawer";
import Footer from "./Footer";
import { Header } from "./Header";
import NotificationBar from "./NotificationBar";
import React, { useState } from "react";

export default function Layout({ header, footer, children, notification }) {
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

  const sideDrawerClosedHandler = () => {
    setSideDrawerIsVisible(false);
  };

  const sideDrawerToggleHandler = () => {
    setSideDrawerIsVisible(!sideDrawerIsVisible);
  };

  return (
    <>
      {header && (
        <Header
          currentRoute="/"
          notification
          drawerToggleClicked={sideDrawerToggleHandler}
        />
      )}
      <SideDrawer open={sideDrawerIsVisible} closed={sideDrawerClosedHandler} />
      <main className="main__wrapper">{children}</main>
      {footer && <Footer />}
    </>
  );
}

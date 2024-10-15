import React from "react";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <React.Fragment>
      {/* Removed all links and title */}
      <div className={styles.skipLink}>
        <a href="#mainContent">Skip to Main Content</a>
      </div>
      {/* Empty Navigation Bar */}
      <nav className="navbar navbar-expand-sm navbar-light border-bottom justify-content-between">
        <div className="navbar-nav">
          {/* No links */}
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;

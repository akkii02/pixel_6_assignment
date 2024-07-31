import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [sideBar, setIsActiveSideBar] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
    setIsActiveSideBar(!sideBar);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navLogo}>
        <img className={styles.logo} src={logo} alt="Logo" />
      </div>

      <button
        className={`${styles.hamburger} ${isActive ? styles.isActive : ''}`}
        onClick={toggleMenu}
      >
        <div className={styles.bar}></div>
      </button>
      <nav className={`${styles.sideBar} ${sideBar ? styles.isActive : ''}`}>
        <li><Link className={styles.routes} to="/" onClick={toggleMenu}>Home</Link></li>
      </nav>
    </div>
  );
};

export default Navbar;

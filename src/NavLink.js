import React from 'react';
import styles from './NavLink.module.css';

const NavLink = ({ href, label, isActive, hasDropdown }) => {
  return (
    <a href={href} className={`${styles.navLink} ${isActive ? styles.active : ''}`}>
      {label}
      {hasDropdown && <span className={styles.dropdownIndicator}></span>}
    </a>
  );
};

export default NavLink;
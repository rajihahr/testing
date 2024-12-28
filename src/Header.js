import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import NavLink from './NavLink';
import Button from './Button';

const Header = () => {

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <h1 className={styles.logo}>BLOODCONNECT.</h1>
          <nav className={styles.navigation}>
            <NavLink href="/" label="Home" isActive />
            <NavLink href="/about" label="About Us" hasDropdown />
            <NavLink href="/faqs" label="FAQs" />
          </nav>
        </div>
        <div className={styles.authButtons}>
        <Link to="/sign-in">
            <Button variant="primary" label="Sign In" />
          </Link>
          <Button variant="secondary" 
                  label="Sign Up" />
        </div>
      </div>
    </header>
  );
};

export default Header;
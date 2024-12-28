import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <h2 className={styles.logo}>BLOODCONNECT.</h2>
        </div>
        <nav className={styles.footerNav}>
          <div className={styles.navColumn}>
            <h3 className={styles.navTitle}>Company</h3>
            <a href="/" className={styles.navLink}>Home</a>
          </div>
          <div className={styles.navColumn}>
            <h3 className={styles.navTitle}>About Us</h3>
            <a href="/faq" className={styles.navLink}>FAQ</a>
            <a href="/terms" className={styles.navLink}>Terms and Conditions</a>
          </div>
        </nav>
      </div>
      <div className={styles.bottomBar}>
        <div className={styles.contactInfo}>
          <span>Phone Number: 956 742 455 678</span>
          <span>Email: info@ddsgnr.com</span>
        </div>
        <div className={styles.socialLinks}>
          <a href="#" aria-label="Facebook"><img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9130dd78f2b01c23e90ad299cd143875b254c0cb25f4922cbb678a4337eb5f84?apiKey=c78782b587ef483eb6a7cfa02a7de9d2&" alt="" className={styles.socialIcon} /></a>
          <a href="#" aria-label="Twitter"><img src="https://cdn.builder.io/api/v1/image/assets/TEMP/59494772a59e69a7ecdca2d68e2c0af589ddb82a1ce2fb16ebbec7b2e415975b?apiKey=c78782b587ef483eb6a7cfa02a7de9d2&" alt="" className={styles.socialIcon} /></a>
          <a href="#" aria-label="Instagram"><img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab72dff522094e8745746cef07b6c9b461187de268352477a269a99ab54302a0?apiKey=c78782b587ef483eb6a7cfa02a7de9d2&" alt="" className={styles.socialIcon} /></a>
          <a href="#" aria-label="LinkedIn"><img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e2e7bf843c2f8ef87becf61c620a479484f761a211fcd3cbfe227b7823d936e?apiKey=c78782b587ef483eb6a7cfa02a7de9d2&" alt="" className={styles.socialIcon} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
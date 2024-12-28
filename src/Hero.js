import React from 'react';
import styles from './Hero.module.css';
import Button from './Button';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d5915ff9a266684357620c5fc39bbb990f834981a45800ff529dc8c4e5e24ed?apiKey=c78782b587ef483eb6a7cfa02a7de9d2&" alt="Blood donation illustration" className={styles.heroImage} />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>Jom Derma Darah 2024</h2>
          <p className={styles.details}>
            Date: 25th December 2024<br />
            Time: 8.00 AM - 5.00 PM<br />
            Venue: Dewan Utama Pelajar, USM
          </p>
          <Button variant="primary" label="Book Now!" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
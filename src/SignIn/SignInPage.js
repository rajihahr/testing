import React from 'react';
import styles from './SignInPage.module.css';
import WelcomeCard from './WelcomeCard';
import SignInOptions from './SignInOptions';

const SignInPage = () => {
  return (
    <main className={styles.signInPage}>
      <header className={styles.header}>
        <h1 className={styles.logo}>BLOODCONNECT.</h1>
      </header>
      <div className={styles.content}>
        <section className={styles.heroSection}>
          <h2 className={styles.heroTitle}>Give Blood Save Lives</h2>
          <p className={styles.heroDescription}>
            Every donation you make helps bring strength, hope, and healing to patients in need. Join our community of life-savers and make a lasting impact today
          </p>
        </section>
        <WelcomeCard />
      </div>
      <SignInOptions />
    </main>
  );
};

export default SignInPage;
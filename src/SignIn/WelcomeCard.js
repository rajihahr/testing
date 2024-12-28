import React from 'react';
import styles from './WelcomeCard.module.css';
import InputField from './InputField';

const WelcomeCard = () => {
  return (
    <section className={styles.welcomeCard}>
      <div className={styles.cardHeader}>
        <div className={styles.titleWrapper}>
          <p className={styles.welcomeText}>
            Welcome to <span className={styles.brandName}>BloodConnect.</span>
          </p>
          <h2 className={styles.signInTitle}>Sign in</h2>
        </div>
        <div className={styles.signUpPrompt}>
          <span className={styles.noAccountText}>No Account ?</span>
          <a href="#signup" className={styles.signUpLink}>Sign up</a>
        </div>
      </div>
      <form className={styles.signInForm}>
        <InputField
          label="Enter your username or email address"
          type="text"
          placeholder="Username or email address"
          id="username"
        />
        <InputField
          label="Enter your password"
          type="password"
          placeholder="Password"
          id="password"
        />
        <a href="#forgot-password" className={styles.forgotPassword}>Forgot password</a>
        <button type="submit" className={styles.signInButton}>Sign in</button>
      </form>
      <div className={styles.orDivider}>OR</div>
    </section>
  );
};

export default WelcomeCard;
import React from 'react';
import styles from './SignInOptions.module.css';

const SignInOptions = () => {
  return (
    <div className={styles.signInOptions}>
      <button className={styles.googleSignIn}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9f03860911b53d86e016267703df0601c051d2833b41be4d17f5479bd727abf?apiKey=c78782b587ef483eb6a7cfa02a7de9d2&" alt="" className={styles.googleIcon} />
        <span>Sign in with Google</span>
      </button>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/eaee9da9c7d395e86dedf6866bcb86179acc6ffbb9c3cc22b295e4db515d154b?apiKey=c78782b587ef483eb6a7cfa02a7de9d2&" alt="Facebook sign-in" className={styles.socialIcon} />
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2270f397b452d752e9f6376dc403a1e83a9ab399d98c961d2512f29e23205e23?apiKey=c78782b587ef483eb6a7cfa02a7de9d2&" alt="Apple sign-in" className={styles.socialIcon} />
    </div>
  );
};

export default SignInOptions;
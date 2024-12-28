import React from 'react';
import styles from './Button.module.css';

const Button = ({ variant, label }) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`}>
      {label}
    </button>
  );
};

export default Button;
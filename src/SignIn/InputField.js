import React from 'react';
import styles from './InputField.module.css';

const InputField = ({ label, type, placeholder, id }) => {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={id} className={styles.label}>{label}</label>
      <input
        type={type}
        id={id}
        className={styles.input}
        placeholder={placeholder}
        aria-label={label}
      />
    </div>
  );
};

export default InputField;
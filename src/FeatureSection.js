import React from 'react';
import styles from './FeatureSection.module.css';

const FeatureSection = ({ title, description, imageSrc, imageAlt, isReversed }) => {
  return (
    <section className={`${styles.featureSection} ${isReversed ? styles.reversed : ''}`}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.imageWrapper}>
        <img src={imageSrc} alt={imageAlt} className={styles.featureImage} />
      </div>
    </section>
  );
};

export default FeatureSection;
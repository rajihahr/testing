import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import FeatureSection from './FeatureSection';
import Footer from './Footer';
import SignInPage from './SignIn/SignInPage';
import styles from './BloodConnectPage.module.css';

const BloodConnectPage = () => {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/sign-in" element={<SignInPage />} />
        </Routes>
        <div className={styles.featureContainer}>
          <FeatureSection
            title="Track Your Income and Expenses, Anytime, Anywhere"
            description="Keep an eye on every Ringgit that comes in, from allowances to part-time jobs. Record expenses as you go – whether it's a meal at the campus café, transportation costs, or study materials – so you're always aware of where your money goes."
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/b5fc88ebc53f58017884d6be81d04ef0d1806c98d2b189c31e9e325d8ffce97f?apiKey=c78782b587ef483eb6a7cfa02a7de9d2&"
            imageAlt="Income and expense tracking illustration"
          />
          <FeatureSection
            title="Budget by Category for Student Life"
            description="Organize spending into custom categories like food, books, social events, and travel. Easily set monthly limits and track how much you're spending on each part of your university life to stay within your budget."
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/27edd8d62b2ade711f9a83ab78a7df9293ef9e807448960796c9caf9604c9b36?apiKey=c78782b587ef483eb6a7cfa02a7de9d2&"
            imageAlt="Budget categories illustration"
            isReversed
          />
          <FeatureSection
            title="Visualize Your Financial Journey"
            description="Our easy-to-read charts and graphs help you understand your spending patterns at a glance. With visual insights, you can track progress, find areas to save, and set financial goals for the semester or year."
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/bee51791581352fa320a464ccd15192ebfab77d300937bdf5b9642de1216b822?apiKey=c78782b587ef483eb6a7cfa02a7de9d2&"
            imageAlt="Financial visualization illustration"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BloodConnectPage;
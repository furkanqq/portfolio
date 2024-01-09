import React from 'react';
import styles from './home.module.css';
import Information from '../../components/information/index';
import Footer from '../../components/footer';
import Modal from '../../components/modal';
// #F4F4F4
export default function Home() {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <Information />
        <div className={styles.text}>
          <h1>Hello!</h1>
          <h1>I am</h1>
          <h1>Furkan</h1>
          <p>
            Web developer with 2 years experience living in Kucukcekmece and
            working with Balance Network.
          </p>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

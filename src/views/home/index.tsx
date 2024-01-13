import React from 'react';
import styles from './home.module.css';
import Information from '../../components/information/index';
import Footer from '../../components/footer';
import ColorPicker from '../../components/color';
export default function Home() {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <ColorPicker />
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

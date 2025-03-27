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
            I develop modern and high-performance web solutions, focusing on
            user experience and efficiency to create innovative digital
            projects. I am a Web Developer.
          </p>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

import React from 'react';
import styles from './footer.module.css';
import Modal from '../modal';

export default function Footer() {
  const [isOpen, setIsOpen] = React.useState(true);

  function handleIsOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.start}>
          © 2023 Furkan <span>My Portfolio</span>
        </div>
        <div className={styles.middle}></div>
        <div className={styles.end}>
          <button onClick={handleIsOpen}>About Me</button>
        </div>
      </div>
      <Modal isOpen={isOpen} handleIsOpen={handleIsOpen} />
    </React.Fragment>
  );
}

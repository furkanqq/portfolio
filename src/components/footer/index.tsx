import React from 'react';
import styles from './footer.module.css';
import Modal from '../modal/informationModal';
import PortfolioModal from '../modal/portfolioModal';

export default function Footer() {
  const [isOpen, setIsOpen] = React.useState(true);
  const [isChoose, setIsChoose] = React.useState(false);

  function handleIsOpen() {
    setIsOpen(!isOpen);
  }

  function handleIsChoose() {
    setIsChoose(!isChoose);
  }
  
  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.start}>
          © 2023 Furkan <span>My Portfolio</span>
        </div>
        <div className={styles.middle}></div>
        <div className={styles.end}>
          <button className={styles.portfolio} onClick={handleIsChoose}>
            My Portfolio
          </button>
          <button className={styles.about} onClick={handleIsOpen}>
            About Me
          </button>
        </div>
      </div>
      <Modal isOpen={isOpen} handleIsOpen={handleIsOpen} />
      <PortfolioModal isChoose={isChoose} handleIsChoose={handleIsChoose} />
    </React.Fragment>
  );
}

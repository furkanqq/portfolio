import React from 'react';
import styles from './modal.module.css';

interface PropsTypes {
  isOpen: boolean;
  handleIsOpen: () => void;
}

export default function Modal(props: PropsTypes) {
  return (
    <React.Fragment>
      <div
        className={
          props.isOpen ? styles.background : styles.background_visible
        }></div>
      <div
        className={props.isOpen ? styles.container : styles.container_visible}>
        <div className={styles.close_button} onClick={props.handleIsOpen}>
          <span>X</span>
        </div>
        <div className={styles.content}>
          <div className={styles.image_part}>
            <div className={styles.image_holder}></div>
          </div>
          <div className={styles.info_part}></div>
        </div>
      </div>
    </React.Fragment>
  );
}

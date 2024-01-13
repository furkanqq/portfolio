import React from 'react';
import styles from './information.module.css';
import Icon from '../shared/icons/icons';

export default function Information() {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.content}>
          <p>+90 545 663 19 49</p>
          <p>
            <a href="mailto:furkanilhanresmi@gmail.com">furkanilhanresmi@gmail.com</a>
          </p>
          <p>Istanbul, Turkiye</p>
          <div className={styles.social}>
            <a
              href="https://github.com/ilhanfurkan?tab=overview&from=2023-12-01&to=2023-12-31"
              target="_blank"
              rel="noreferrer">
              <Icon icon={'github'} />
            </a>
            <a
              href="https://www.linkedin.com/in/furkan-ilhan/"
              target="_blank"
              rel="noreferrer">
              <Icon icon={'linkedin'} />
            </a>
            <a
              href="https://www.instagram.com/llhanfurkan/"
              target="_blank"
              rel="noreferrer">
              <Icon icon={'instagram'} />
            </a>
            <a
              href="https://twitter.com/1Furkanilhan"
              target="_blank"
              rel="noreferrer">
              <Icon icon={'twitter'} />
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

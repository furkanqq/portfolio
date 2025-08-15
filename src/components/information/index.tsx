import React from 'react';
import styles from './information.module.css';
import Icon from '../shared/icons/icons';

export default function Information() {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.content}>
          <p></p>
          <p>
            <a
              href="mailto:furkanilhanresmi@gmail.com"
              title="furkan ilhan's mail address">
              furkanilhanresmi@gmail.com
            </a>
          </p>
          <p>Istanbul, Turkiye</p>
          <div className={styles.social}>
            <a
              href="https://github.com/furkanqq"
              aria-label="furkan ilhan's github account"
              title="furkan ilhan's github account"
              target="_blank"
              rel="noreferrer">
              <Icon icon={'github'} />
            </a>
            <a
              href="https://www.linkedin.com/in/furkan-ilhan/"
              aria-label="furkan ilhan's linkedin account"
              title="furkan ilhan's linkedin account"
              target="_blank"
              rel="noreferrer">
              <Icon icon={'linkedin'} />
            </a>
            <a
              href="https://www.instagram.com/llhanfurkan/"
              aria-label="furkan ilhan's instagram account"
              title="furkan ilhan's instagram account"
              target="_blank"
              rel="noreferrer">
              <Icon icon={'instagram'} />
            </a>
            <a
              href="https://twitter.com/1Furkanilhan"
              aria-label="furkan ilhan's twitter account"
              title="furkan ilhan's twitter account"
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

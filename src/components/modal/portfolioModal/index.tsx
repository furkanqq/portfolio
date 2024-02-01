import React from 'react';
import styles from './portfolioModal.module.css';
import Icon from '../../../components/shared/icons/icons';
import portfolio, { PortfolioType } from '../../../config/portfolio.config';

interface PropsTypes {
  isChoose: boolean;
  handleIsChoose: () => void;
}

export default function PortfolioModal(props: PropsTypes) {
  const [hoveredCardIndex, setHoveredCardIndex] = React.useState<number | null>(
    null
  );
  const [timeOutChoose, setTimeOutChoose] = React.useState(false);

  function handleCardHover(index: number) {
    setHoveredCardIndex(index);
  }

  function handleCardNotHover() {
    setHoveredCardIndex(null);
  }

  React.useEffect(() => {
    if (props.isChoose) {
      setTimeout(() => {
        setTimeOutChoose(true);
      }, 500);
    } else {
      setTimeOutChoose(false);
    }
  }, [props.isChoose]);

  return (
    <React.Fragment>
      <div
        className={timeOutChoose ? styles.container : styles.containerHidden}>
        <div onClick={props.handleIsChoose} className={styles.close}>
          <Icon icon={'arrowLeft'} /> <span>Back To Home</span>
        </div>
        <div className={styles.title}>
          <h1>Portfolio</h1>
          <h4>A few recent design and coding projects</h4>
        </div>
        <div className={styles.content}>
          {portfolio.map((x: PortfolioType, index: number) => (
            <div
              className={
                index === hoveredCardIndex ? styles.cardHover : styles.card
              }
              key={index}
              onMouseOver={() => handleCardHover(index)}
              onMouseLeave={handleCardNotHover}>
              <h1>{x.title}</h1>
              <img src={x.img} alt="preview" />
              <div
                className={
                  index === hoveredCardIndex ? styles.infoHover : styles.info
                }>
                <p>{x.desc}</p>
                <a href={x.link} target="_blank" rel="noreferrer">
                  <button className={styles.direction}>Visit</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className={
          props.isChoose ? styles.backgroundTwo : styles.backgroundTwoHidden
        }></div>
      <div
        className={
          props.isChoose ? styles.backgroundOne : styles.backgroundOneHidden
        }></div>
    </React.Fragment>
  );
}

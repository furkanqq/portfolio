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

  const [modalVisible, setModalVisible] = React.useState({
    visible: true,
    link: '',
  });

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
                {x.visit ? (
                  <a href={x.link} target="_blank" rel="noreferrer">
                    <button className={styles.direction}>Visit</button>
                  </a>
                ) : (
                  <button
                    className={styles.direction}
                    onClick={() =>
                      setModalVisible(() => ({
                        link: x.link,
                        visible: true,
                      }))
                    }>
                    Visit
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        {modalVisible.visible && (
          <Modal link={modalVisible.link} setModalVisible={setModalVisible} />
        )}
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

function Modal({
  link,
  setModalVisible,
}: {
  link: string;
  setModalVisible: (value: { visible: boolean; link: string }) => void;
}) {
  return (
    <div className={styles.infoModal}>
      <div className={styles.infoCard}>
        <label className={styles.infoTitle}>Information Text</label>
        <p className={styles.infoContent}>
          This project was developed during my time at a previous company, and
          it has been taken offline by the company. Due to legal reasons, the
          source code and content cannot be shared. You can view the former link
          of the project here:{' '}
          <a href={link} target="_blank" rel="noreferrer">
            {link}
          </a>
          .
        </p>
        <hr />
        <button
          className={styles.infoClose}
          onClick={() =>
            setModalVisible({
              link: '',
              visible: false,
            })
          }>
          Close
        </button>
      </div>
    </div>
  );
}

import React from 'react';
import styles from './modal.module.css';
import info, { IInfoType } from '../../config/information.config';
import Icon from '../shared/icons/icons';
import skills, { ISkillsType } from '../../config/skills.config';

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
          <div className={styles.info_part}>
            <div className={styles.name}>FURKAN İLHAN</div>
            <div className={styles.info}>
              {info.map((x: IInfoType, index: number) => (
                <div key={index}>
                  {x.describe !== 'Download' ? (
                    <p>
                      <span>{x.title}: </span> {x.describe}
                    </p>
                  ) : (
                    <p>
                      <span>{x.title}: </span>
                      <a
                        href={
                          'https://cdn.discordapp.com/attachments/718189165430308988/1194986579798798416/Furkan_Ilhan_CV.pdf?ex=65b258fa&is=659fe3fa&hm=f646da64176f82ede0c5096f2840284bbe7e38f3fc798238cc470754c7d03e47&'
                        }
                        download="Furkan_Ilhan_CV"
                        target="_blank"
                        rel="noreferrer">
                        {x.describe}
                      </a>
                      <span>
                        <Icon icon={'download'} />
                      </span>
                    </p>
                  )}
                </div>
              ))}
            </div>
            <div className={styles.skills}>
              {skills.map((x: ISkillsType, index: number) => (
                <div key={index}>
                  <span>{x.name}</span>
                  {x.icon !== '' && (
                    <img
                      src={`skillsIcon/${x.icon}`}
                      alt="icon"
                      width={40}
                      height={
                        x.icon === 'sass.png' ||
                        x.icon === 'tailwind.png' ||
                        x.icon === 'nextjs.png'
                          ? 28
                          : 40
                      }
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

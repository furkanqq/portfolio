import React from 'react';
import styles from './modal.module.css';
import info, { IInfoType } from '../../../config/information.config';
import Icon from '../../shared/icons/icons';
import skills, { ISkillsType } from '../../../config/skills.config';

interface PropsTypes {
  isOpen: boolean;
  handleIsOpen: () => void;
}

export default function Modal(props: PropsTypes) {
  return (
    <React.Fragment>
      <div
        className={props.isOpen ? styles.background : styles.background_visible}
        onClick={props.handleIsOpen}></div>
      <div
        className={props.isOpen ? styles.container : styles.container_visible}>
        <div className={styles.close_button} onClick={props.handleIsOpen}>
          <span>
            <Icon icon={'close'} />
          </span>
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
                          'https://cdn.discordapp.com/attachments/718189165430308988/1217491062009102426/Furkan_Ilhan_CV.pdf?ex=660437e9&is=65f1c2e9&hm=5da3564a80fa0551f245000afba489e8476a39a2ff228d64aab4949efcb9f414&'
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
                      height={40}
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

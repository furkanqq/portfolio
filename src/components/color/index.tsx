import React from 'react';
import styles from './color.module.css';
import Icon from '../shared/icons/icons';
import colorList, { IColorListType } from '../../config/color.config';

const ColorPicker = () => {
  const [visible, setVisible] = React.useState(false);

  const userSelectedColor: string = localStorage.getItem('color') || 'main';

  React.useEffect(() => {
    const rootElement = document.getElementById('html') as HTMLElement | null;
    if (rootElement && userSelectedColor) {
      localStorage.setItem('color', userSelectedColor);
      rootElement.classList.add(userSelectedColor);

      return () => {
        rootElement.classList.remove(userSelectedColor);
      };
    }
  }, [userSelectedColor]);

  return (
    <div className={visible ? styles.container_visible : styles.container}>
      <div className={styles.after} onClick={() => setVisible(!visible)}>
        <div>
          <Icon icon={'setting'} />
        </div>
      </div>
      <div className={styles.title}>Color Switcher</div>
      <div className={styles.button_list}>
        {colorList.map((x: IColorListType, index: number) => (
          <div
            className={styles.color_button}
            key={index}
            onClick={() => {
              //   setColor(x.name);
              localStorage.setItem('color', x.name);
              window.location.reload();
            }}
            style={{ backgroundColor: x.color }}></div>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;

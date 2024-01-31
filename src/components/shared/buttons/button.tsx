import styles from './index.module.css';
import React from 'react';

type ButtonProps = {
  title: string;
  // The css for these parameters are contained in the globals.css.
  variant?: 'primary' | 'secondary';
  icon?: string;
  tinyColor?: string;
  iconColor?: string;
  iconWidth?: number;
  iconHeight?: number;
  mt?: number;
  mb?: number;
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'expand';
  style?: any;
  link?: string;
  typeButton: 'normal' | 'link';
  onClick?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
};

export default function Button({ ...props }: ButtonProps) {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };
  return (
    <React.Fragment>
      {props?.typeButton === 'link' ? (
        <a
          href={props?.link || '#'}
          data-size={props?.size}
          className={`${styles.button} ${props?.variant}`}
          style={{
            ...props?.style,
            marginTop: props?.mt || 0,
            marginBottom: props?.mb || 0,
            width: props?.fullWidth ? '100%' : 'fit-content',
            color: props?.tinyColor ? props?.tinyColor : '#fff',
          }}>
          {props?.title}
        </a>
      ) : (
        <button
          data-size={props?.size}
          className={`${styles.button} ${props?.variant}`}
          onClick={handleClick}
          disabled={props.disabled}
          style={{
            ...props?.style,
            marginTop: props?.mt || 0,
            marginBottom: props?.mb || 0,
            width: props?.fullWidth ? '100%' : 'fit-content',
            color: props?.tinyColor ? props?.tinyColor : '#fff',
          }}>
          {props?.title}
        </button>
      )}
    </React.Fragment>
  );
}

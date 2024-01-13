import React from 'react';

// icon library
import * as Icons from '../../../assets/icons/icons';

interface Match {
  [key: string]: JSX.Element;
}

type IconType = keyof Match;

interface Props {
  icon: IconType;
  width?: number;
  height?: number;
  fill?: string;
}

const Icon = ({ icon, ...props }: Props) => {
  // icon match by query
  const match: Match = {
    instagram: <Icons.Instagram {...props} />,
    twitter: <Icons.Twitter {...props} />,
    linkedin: <Icons.Linkedin {...props} />,
    github: <Icons.Github {...props} />,
    download: <Icons.Download {...props} />,
    setting: <Icons.Setting {...props} />,
    close: <Icons.Close {...props} />,
  };

  if (!match[icon]) return null;
  return <span className="icon">{match[icon]}</span>;
};

export default Icon;

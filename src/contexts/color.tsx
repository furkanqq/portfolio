import React, { createContext, useContext, useState } from 'react';

interface ContextProps {
  readonly selectedColor: string | '';
  readonly setColor: (selectedColor: string) => void;
}

const ColorContext = React.createContext<ContextProps>({
  selectedColor: 'main',
  setColor: () => null,
});

export const ColorProvider = ({ children }: any) => {
  const [selectedColor, setSelectedColor] = useState('#750175');

  const setColor = (newColor: string) => {
    setSelectedColor(newColor);
  };

  return (
    <ColorContext.Provider value={{ selectedColor, setColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => {
  return useContext(ColorContext);
};

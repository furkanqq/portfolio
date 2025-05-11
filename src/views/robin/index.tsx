import { useEffect, useState } from 'react';
import './adore.css';
import Images from '../../assets/image';

export default function Robin() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (stage === 3) {
      return;
    }
    const timer = setTimeout(() => {
      setStage((prev) => prev + 1);
    }, 3000);
    return () => clearTimeout(timer);
  }, [stage]);

  return (
    <div className="animation-container">
      {stage === 0 && (
        <div className="text stage-one">Merhaba Anne, Merhaba Baba!</div>
      )}
      {stage === 1 && (
        <div className="text stage-two">Ben Robin Geliyorum!</div>
      )}
      {stage === 2 && (
        <div className="text stage-two">Anneler Günün kutlu olsun.</div>
      )}
      {stage === 3 && (
        <img
          src={Images.Robin}
          alt="Final Image"
          className="image stage-three"
          width={400}
          height={400}
        />
      )}
    </div>
  );
}

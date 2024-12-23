import { useEffect, useState } from 'react';
import './brother.css';
import Images from '../../assets/image';

export default function Brother() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (stage === 4) {
      return;
    }
    const timer = setTimeout(() => {
      setStage((prev) => prev + 1);
    }, 3000);
    return () => clearTimeout(timer);
  }, [stage]);

  return (
    <div className="animation-container">
      {stage === 0 && <div className="text stage-one">Selam Abi!</div>}
      {stage === 1 && (
        <div className="text stage-two">İyi ki varsın abicim.</div>
      )}
      {stage === 2 && (
        <div className="text stage-two">Dünyanın en iyi babası olacaksın.</div>
      )}
      {stage === 3 && (
        <div className="text stage-three">
          Benim için dünyanın en güzel babasıydın.
        </div>
      )}
      {stage === 4 && (
        <img
          src={Images.Babe}
          alt="Final Image"
          className="image stage-three"
          width={400}
          height={400}
        />
      )}
    </div>
  );
}

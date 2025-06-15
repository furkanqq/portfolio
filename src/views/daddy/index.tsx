import { useEffect, useState } from 'react';
import './daddy.css';
import Images from '../../assets/image';

export default function Daddy() {
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
        <div className="text stage-one">
          Her zaman yanımda olduğun için teşekkür ederim.
        </div>
      )}
      {stage === 1 && (
        <div className="text stage-two">Varlığın bana güç veriyor.</div>
      )}
      {stage === 2 && (
        <div className="text stage-two">
          Babalar Günü’n kutlu olsun abicim, seni çok seviyorum!
        </div>
      )}
      {stage === 3 && (
        <img
          src={Images.Daddy}
          alt="Final Image"
          className="image stage-three"
          width={400}
          height={600}
        />
      )}
    </div>
  );
}

import React from 'react';
import Confetti from 'react-confetti';

interface ShowProp {
  show: boolean;
}

const Test: React.FC<ShowProp> = ({ show }) => {

  return (
    <div>
      {show && <Confetti width={window.innerWidth} height={window.innerHeight} />}
    </div>
  );
};

export default Test;
import React from 'react';
import Confetti from 'react-confetti';

interface ShowProp {
  show: boolean;
}

const Test: React.FC<ShowProp> = ({ show }) => {

  return (
    <div>
      {show && <Confetti width={window.innerWidth - 30} height={window.innerHeight - 30} />}
    </div>
  );
};

export default Test;
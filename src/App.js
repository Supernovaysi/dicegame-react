import { useState } from 'react';
import Board from './Board';
import Button from './Button';

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [myHistory, setGameHistory] = useState([]);
  const [otherHistory, setOtherGameHistory] = useState([]);

  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    setGameHistory([...myHistory, nextMyNum]);
    setOtherGameHistory([...otherHistory, nextOtherNum]);
  };

  const handleClearClick = () => {
    setGameHistory([]);
    setOtherGameHistory([]);
  };

  return (
    <div>
      <Button color = 'blue' onClick={handleRollClick}>던지기</Button>
      <Button color = 'red' onClick={handleClearClick}>처음부터</Button>
      <div>
        <Board name="나" color="blue" gameHistory={myHistory} />
        <Board name="상대" color="red" gameHistory={otherHistory} />
      </div>
    </div>
  );
}

export default App;

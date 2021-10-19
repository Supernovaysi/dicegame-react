import { useState } from 'react';
import Board from './Board';
import Button from './Button';
import Logo from './Logo';
import './App.css';

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const boardWinner = 'Board App-board Board-winner'
  const boardNotWinner = 'Board App-board'
  const [myHistory, setGameHistory] = useState([]);
  const [otherHistory, setOtherGameHistory] = useState([]);
  const [myClass, setMyClass] = useState(boardNotWinner);
  const [otherClass, setOtherClass] = useState(boardNotWinner);

  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);

    setGameHistory([...myHistory, nextMyNum]);
    setOtherGameHistory([...otherHistory, nextOtherNum]);

    if(nextMyNum===nextOtherNum) 
      {setOtherClass(boardNotWinner); setMyClass(boardNotWinner);}
    else if(nextMyNum>nextOtherNum) 
      {setOtherClass(boardNotWinner); setMyClass(boardWinner);}
    else 
      {setOtherClass(boardWinner); setMyClass(boardNotWinner);}
  };

  const handleClearClick = () => {
    setGameHistory([]);
    setOtherGameHistory([]);
    setMyClass(boardNotWinner);
    setOtherClass(boardNotWinner);
  };

  return (
    <div className = 'App'>
      <div>
        <Logo className = 'App-logo' />
        <h1 className="App-title">주사위게임</h1>
      </div>
      <div>
        <Button className = 'Button blue App-button' color = 'blue' onClick={handleRollClick}>던지기</Button>
        <Button className = 'Button red App-button' color = 'red' onClick={handleClearClick}>처음부터</Button>
      </div>
      <div className = 'App-boards'>
        <Board className = {myClass} name="나" color="blue" gameHistory={myHistory} />
        <Board className = {otherClass} name="상대" color="red" gameHistory={otherHistory} />
      </div>
    </div>
  );
}

export default App;

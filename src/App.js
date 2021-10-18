import Board from "./Board";


function App() {
  return (
    <div>
      <Button onClick={handleRollClick}>던지기</Button>
      <Button onClick={handleClearClick}>처음부터</Button>
      <div>
        <Board name="나" color="blue" num={num} sum={sum} gameHistory={gameHistory} />
        <Board name="상대" color="red" num={otherNum} sum={otherSum} gameHistory={otherGameHistory} />
      </div>
    </div>
  );
}

export default App;
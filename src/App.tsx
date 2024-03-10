import {Global, css} from "@emotion/react";
import styled from "@emotion/styled";
import Header from "./components/Header";
import Board from "./components/Board";
import useGameBoard from "./hooks/useGameBoard";
import PlayerScore from "./components/PlayerScore";
import PlayerTurn from "./components/PlayerTurn";
import WinnerBoard from "./components/WinnerBoard";

const App = () => {
  const {
    board,
    onRestart,
    onChipClick,
    currentPlayer,
    isGameFinished,
    whichPlayerWon,
    playersScore,
  } = useGameBoard();

  return (
    <main>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Roboto Mono", monospace;
          }
          body {
            height: 100vh;
            width: 100%;
          }
          div#root {
            min-height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            background-color: rgb(121, 69, 255);
          }
          main {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        `}
      />
      <Header onRestart={onRestart} />
      <BoardWrapper>
        <PlayerScore player="red" score={playersScore["player1"]} />
        <Board board={board} onChipClick={onChipClick} currentPlayer={currentPlayer} />
        <PlayerScore player="yellow" score={playersScore["player2"]} />
      </BoardWrapper>

      <FooterWrapper>
        {isGameFinished && whichPlayerWon ? (
          <WinnerBoard onRestart={onRestart} whichPlayerWon={whichPlayerWon} />
        ) : (
          <PlayerTurn currentPlayer={currentPlayer} />
        )}
      </FooterWrapper>
    </main>
  );
};

const BoardWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  max-width: 1200px;
`;

const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 40px auto;
`;

export default App;

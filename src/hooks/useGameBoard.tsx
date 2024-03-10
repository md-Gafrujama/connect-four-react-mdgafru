import {useState, useEffect, useCallback} from "react";
import {Chip, CurrentPlayer} from "../types";
import {checkForPlayerWin, generateBoard} from "../utils";

const BOTTOM_BORDER = 6;

const useGameBoard = () => {
  const [board, setBoard] = useState<Chip[]>([]);
  const [currentPlayer, setCurrentPlayer] = useState<CurrentPlayer>("red");
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [whichPlayerWon, setWhichPlayerWon] = useState<string>();
  const [playersScore, setPlayersScore] = useState({player1: 0, player2: 0});

  const onRestart = useCallback(() => {
    setBoard(generateBoard());
    setIsGameFinished(false);
    setWhichPlayerWon(undefined);
  }, []);

  const onChipClick = useCallback(
    ({position, value}: Chip, currentPlayer: CurrentPlayer) => {
      const currentX = position.x;

      if (isGameFinished) {
        return;
      }

      setBoard((boardState) => {
        if (value !== null) {
          return boardState;
        }

        // check the empty position in the current x column and the take the bottom one
        for (let i = position.y; i <= BOTTOM_BORDER; i++) {
          const currentIndex = boardState.findIndex(
            (chip) => chip.position.x === currentX && chip.position.y === i
          );
          const nextIndex = boardState.findIndex(
            (chip) => chip.position.x === currentX && chip.position.y === i + 1
          );

          if (boardState[nextIndex]?.value !== null) {
            boardState[currentIndex] = {...boardState[currentIndex], value: currentPlayer};
            break;
          }

          if (i === BOTTOM_BORDER) {
            boardState[currentIndex] = {...boardState[currentIndex], value: currentPlayer};
            break;
          }
        }

        // check if the new board state makes the player to win
        const playerWon = checkForPlayerWin(boardState);
        setCurrentPlayer(currentPlayer === "red" ? "yellow" : "red");

        if (playerWon) {
          setIsGameFinished(true);
          setWhichPlayerWon(playerWon);
          setPlayersScore((prev) => {
            if (playerWon === "red") {
              prev["player1"] = prev["player1"] + 1;
            } else {
              prev["player2"] = prev["player2"] + 1;
            }

            return prev;
          });
        }

        return boardState;
      });
    },
    [isGameFinished]
  );

  useEffect(() => {
    setBoard(generateBoard());
  }, []);

  return {
    board,
    onRestart,
    onChipClick,
    currentPlayer,
    isGameFinished,
    whichPlayerWon,
    playersScore,
  };
};

export default useGameBoard;

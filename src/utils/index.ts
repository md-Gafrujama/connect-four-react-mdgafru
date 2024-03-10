import {Chip} from "../types";

const diagonals = [
  [3, 9, 15, 21],
  [4, 10, 16, 22, 28],
  [5, 11, 17, 23, 29, 35],
  [6, 12, 18, 24, 30, 36, 42],
  [13, 19, 25, 31, 37, 43],
  [20, 26, 32, 38, 44],
  [27, 33, 39, 45],
  [3, 11, 19, 27],
  [2, 10, 18, 26, 34],
  [1, 9, 17, 25, 33, 41],
  [0, 8, 16, 24, 32, 40, 48],
  [7, 15, 23, 31, 39, 47],
  [14, 22, 30, 38, 46],
  [21, 29, 37, 45],
];

export const generateBoard = () => {
  const board = [];
  let x = 0;
  let y = 0;
  let max = 6;
  for (let i = 0; i < 49; i++) {
    if (x > max) {
      y++;
      x = 0;
    }
    board.push({value: null, position: {x, y}, index: i});
    x += 1;
  }
  return board;
};

export const checkForPlayerWin = (board: Chip[]) => {
  let playerWon: string | null = null;
  for (let i = 0; i < 7; i++) {
    const row = board.filter((chip) => chip.position.y === i);
    const isMatch = checkForFourInARow(row);

    if (isMatch) {
      playerWon = isMatch;
    }
  }

  for (let i = 0; i < 7; i++) {
    const column = board.filter((chip) => chip.position.x === i);
    const isMatch = checkForFourInARow(column);

    if (isMatch) {
      playerWon = isMatch;
    }
  }

  for (let diagonal of diagonals) {
    const computedDiagonal = [];
    for (let index of diagonal) {
      computedDiagonal.push(board[index]);
    }

    const isMatch = checkForFourInARow(computedDiagonal);
    if (isMatch) {
      playerWon = isMatch;
    }
  }

  return playerWon;
};

const checkForFourInARow = (chips: Chip[]): string | null => {
  let currentValue: string | null = null;
  let counter = 1;

  for (let chip of chips) {
    if (chip.value === null) {
      counter = 1;
    } else if (chip.value !== currentValue) {
      currentValue = chip.value;
      counter = 1;
    } else if (chip.value === currentValue) {
      counter = counter + 1;
      if (counter >= 4) {
        break;
      }
    }
  }

  if (counter >= 4) {
    return currentValue;
  }

  return null;
};

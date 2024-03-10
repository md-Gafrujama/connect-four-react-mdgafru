import styled from "@emotion/styled";
import {Chip as ChipI, CurrentPlayer, OnChipClick} from "../types";

interface ChipProps {
  chip: ChipI;
  currentPlayer: CurrentPlayer;
  onClick: OnChipClick;
}

const Chip = ({chip, currentPlayer, onClick}: ChipProps) => {
  const {value} = chip;
  return (
    <StyledChip
      currentPlayer={currentPlayer}
      value={value}
      onClick={() => onClick(chip, currentPlayer)}
    ></StyledChip>
  );
};

const StyledChip = styled.div<{value: null | "red" | "yellow"; currentPlayer: CurrentPlayer}>`
  border: 3px solid black;
  border-radius: 50%;
  background-color: ${({value}) =>
    value === "red"
      ? "rgb(253,102,135)"
      : value === "yellow"
      ? "rgb(255,206,103)"
      : "rgb(121, 69, 255)"};
  width: 100%;
  max-width: 65px;
  height: 65px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  text-align: center;
  color: white;

  :hover {
    border: 3px solid
      ${({currentPlayer, value}) =>
        value !== null
          ? "black"
          : currentPlayer === "red"
          ? "rgb(253,102,135)"
          : "rgb(255,206,103)"};
    cursor: ${({value}) => (value === null ? "pointer" : "default")};
  }
`;

export default Chip;

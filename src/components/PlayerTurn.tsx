import {CurrentPlayer} from "../types";
import styled from "@emotion/styled";

interface PlayerTurnProps {
  currentPlayer: CurrentPlayer;
}

const PlayerTurn = ({currentPlayer}: PlayerTurnProps) => {
  return (
    <Wrapper player={currentPlayer}>
      <Text>{`Player ${currentPlayer === "red" ? "1" : "2"}'s turn`}</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div<{player: CurrentPlayer}>`
  display: flex;
  flex-direction: column;
  background-color: ${({player}) => (player === "red" ? "rgb(253,102,135)" : "rgb(255,206,103)")};
  width: 250px;
  height: 120px;
  border: 3px solid black;
  border-radius: 24px;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

const Text = styled.h1`
  text-align: center;
  font-weight: bolder;
  color: white;
`;

export default PlayerTurn;

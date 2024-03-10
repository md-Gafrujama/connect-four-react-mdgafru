import styled from "@emotion/styled";
import Button from "./Button";

interface WinnerBoardProps {
  whichPlayerWon: string;
  onRestart: () => void;
}

const WinnerBoard = ({onRestart, whichPlayerWon}: WinnerBoardProps) => {
  return (
    <Wrapper>
      <H2>Player {whichPlayerWon === "red" ? "1" : "2"}</H2>
      <H1>WINS</H1>
      <Button onClick={onRestart}>Play again</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 140px;
  border: 3px solid black;
  border-radius: 24px;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  background-color: white;
  align-items: center;
`;

const H2 = styled.h3`
  text-align: center;
`;

const H1 = styled.h1`
  text-align: center;
  font-size: 50px;
`;

export default WinnerBoard;

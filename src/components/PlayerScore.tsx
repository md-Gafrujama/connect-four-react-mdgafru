import styled from "@emotion/styled";

interface PlayerScoreProps {
  player: "red" | "yellow";
  score: number;
}

const PlayerScore = ({player, score}: PlayerScoreProps) => {
  return (
    <Wrapper>
      <ColorCircle player={player} />
      <Player>{player === "red" ? "Player 1" : "Player 2"}</Player>
      <Score>{score}</Score>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 160px;
  height: 200px;
  background-color: white;
  position: relative;
  border: 3px solid black;
  border-radius: 24px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

const Player = styled.h2`
  text-align: center;
  margin-top: 40px;
  font-weight: bolder;
`;

const Score = styled.h1`
  text-align: center;
  margin-top: 20px;
  font-weight: bolder;
  font-size: 50px;
`;

const ColorCircle = styled.div<{player: "red" | "yellow"}>`
  border-radius: 50%;
  border: 3px solid black;
  width: 50px;
  height: 50px;
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({player}) => (player === "red" ? "rgb(253,102,135)" : "rgb(255,206,103)")};
`;

export default PlayerScore;

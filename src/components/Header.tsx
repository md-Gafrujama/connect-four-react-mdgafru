import styled from "@emotion/styled";
import Button from "./Button";

interface HeaderProps {
  onRestart: () => void;
}

const Header = ({onRestart}: HeaderProps) => {
  return (
    <Wrapper>
      <Title>Connect four in React</Title>
      <Button onClick={onRestart}>Restart</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  justify-content: space-between;
  height: 50px;
  margin: 16px 0;
  align-items: center;
`;

const Title = styled.h2`
  color: white;
`;

export default Header;

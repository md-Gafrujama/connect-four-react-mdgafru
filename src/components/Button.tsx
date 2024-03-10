import styled from "@emotion/styled";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({children, onClick}: ButtonProps) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  text-transform: uppercase;
  border: none;
  outline: none;
  border-radius: 24px;
  color: white;
  cursor: pointer;
  width: 100px;
  height: 30px;
  background-color: rgb(92, 43, 216);
`;

export default Button;

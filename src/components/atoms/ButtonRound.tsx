import styled from "@emotion/styled";

const ButtonRound = styled.button`
  font-family: ${({ theme }) => theme.fonts.righteous};
  border: none;
  border-radius: 2%;
  color: ${({ disabled, theme }) => (disabled ? theme.colors.gray : theme.colors.cottonWhite)};
  cursor: pointer;
`;

export default ButtonRound;

import { PropsWithChildren } from "react";

import styled from "@emotion/styled";

const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  background-color: ${({ theme }) => theme.colors.cottonWhite};
  border-radius: 3vmin;
  left: ${({ isActive }) => (isActive ? "0" : "-150%")};
  position: fixed;
  bottom: 0;
  top: 0;
  padding: 40px;
  width: 340px;
  box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.3);
  transition: all 0.5s;
  z-index: 10;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 340px;
    padding: 40px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 200px;
    padding: 40px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 130px;
    padding: 20px;
  }
`;

type Props = {
  isActive: boolean;
};

const Sidebar: React.FC<PropsWithChildren<Props>> = ({ isActive, children }: PropsWithChildren<Props>) => {
  return <Container isActive={isActive}>{children}</Container>;
};

export default Sidebar;

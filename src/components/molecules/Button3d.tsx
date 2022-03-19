import { PropsWithChildren } from "react";

import styled from "@emotion/styled";

import ButtonRound from "~components/atoms/button/ButtonRound";
import CenterBox from "~components/atoms/flexbox/CenterBox";

const Container = styled(ButtonRound)`
  border-radius: 6%;
  font-family: roboto;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray};
  background-color: black;
`;

const Wrapper = styled(CenterBox)<Props>`
  background-color: ${({ theme }) => theme.colors.opacityCottonWhite};
  color: ${({ theme }) => theme.colors.gray};
  position: relative;
  border-radius: 6%;
  width: ${({ width }) => width}vmin;
  height: ${({ height }) => height}vmin;
  font-size: ${({ fontSize }) => fontSize}vmin;
  left: -5px;
  top: -5px;
  :active {
    left: 5px;
    top: 5px;
  }
`;

type Props = {
  width: string;
  height: string;
  fontSize: string;
};

const Button3d: React.FC<Props> = (props: PropsWithChildren<Props>) => {
  return (
    <Container>
      <Wrapper {...props}>{props.children}</Wrapper>
    </Container>
  );
};

export default Button3d;

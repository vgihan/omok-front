import styled from "@emotion/styled";

const Container = styled.path`
  stroke: black;
  fill: black;
  :hover {
    stroke: white;
  }
`;

type Props = {
  center: {
    x: number;
    y: number;
  };
};

const CrossShape: React.FC<Props> = ({ center }: Props) => {
  const init = `M${center.x - 24.5} ${center.y - 0.5}`;
  const dist = [
    { x: center.x - 0.5, y: center.y - 0.5 },
    { x: center.x - 0.5, y: center.y - 24.5 },
    { x: center.x + 0.5, y: center.y - 24.5 },
    { x: center.x + 0.5, y: center.y - 0.5 },
    { x: center.x + 25.5, y: center.y - 0.5 },
    { x: center.x + 25.5, y: center.y + 0.5 },
    { x: center.x + 0.5, y: center.y + 0.5 },
    { x: center.x + 0.5, y: center.y + 25.5 },
    { x: center.x - 0.5, y: center.y + 25.5 },
    { x: center.x - 0.5, y: center.y + 0.5 },
    { x: center.x - 24.5, y: center.y + 0.5 },
  ];

  return <Container d={init + dist.map((pos) => `L${pos.x} ${pos.y}`) + "Z"}></Container>;
};

export default CrossShape;

import styled from "@emotion/styled";
import { MouseEventHandler, useState } from "react";
import theme from "../../styles/theme";

const SvgBoard = styled.svg`
  height: 100%;
  width: 100%;
  cursor: pointer;
`;

const Line = styled.line`
  stroke: #000;
  stroke-width: 1;
`;

const Rect = styled.rect`
  fill: transparent;
  :hover {
    stroke: ${theme.colors.opacityCottonWhite};
    stroke-width: 5px;
  }
  :active {
    stroke: black;
    stroke-width: 5px;
  }
`;

const ONE_SPACE = 50;
const END_COORDINATE = 750;
const CORRECTION_LINE_CONSTANT = 0.5;
const FOCUS_BOX_SIZE = 32;

type BallInfo = {
  type: "black" | "white";
  pos: Pos;
};

type Pos = {
  x: number;
  y: number;
};

const OmokField: React.FC = () => {
  const [ballsInfo, setBallsInfo] = useState<BallInfo[]>([]);
  const [selected, setSelected] = useState<Pos | null>(null);
  const coordinate = Array.from({ length: 15 }).map((v, i) => i + 1);

  const handleClickField: MouseEventHandler = (e) => {
    const x = e.currentTarget.getAttribute("data-x");
    const y = e.currentTarget.getAttribute("data-y");
    if (!x || !y) return;

    setSelected({ x: parseInt(x), y: parseInt(y) });
  };

  return (
    <SvgBoard viewBox="0 0 800 800" onClick={handleClickField}>
      <defs>
        <linearGradient id="black" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#999"></stop>
          <stop offset="50%" stop-color="#363636"></stop>
          <stop offset="100%" stop-color="#000"></stop>
        </linearGradient>
      </defs>
      <defs>
        <linearGradient id="white" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="40%" stop-color="white"></stop>
          <stop offset="90%" stop-color="#555"></stop>
        </linearGradient>
      </defs>
      <circle cx="200" cy="200" r="6" fill="black" />
      <circle cx="200" cy="600" r="6" fill="black" />
      <circle cx="600" cy="200" r="6" fill="black" />
      <circle cx="600" cy="600" r="6" fill="black" />
      {coordinate.map((pos) => (
        <Line
          key={"x" + pos}
          x1={pos * ONE_SPACE + CORRECTION_LINE_CONSTANT}
          y1={ONE_SPACE + CORRECTION_LINE_CONSTANT}
          x2={pos * ONE_SPACE + CORRECTION_LINE_CONSTANT}
          y2={END_COORDINATE + CORRECTION_LINE_CONSTANT}
        />
      ))}
      {coordinate.map((pos) => (
        <Line
          key={"y" + pos}
          x1={ONE_SPACE + CORRECTION_LINE_CONSTANT}
          y1={pos * ONE_SPACE + CORRECTION_LINE_CONSTANT}
          x2={END_COORDINATE + CORRECTION_LINE_CONSTANT}
          y2={pos * ONE_SPACE + CORRECTION_LINE_CONSTANT}
        />
      ))}
      {coordinate.map((x) =>
        coordinate.map((y) => {
          const isSelected = selected && selected.x === x && selected.y === y;
          return (
            <Rect
              key={`${x},${y}`}
              data-x={x}
              data-y={y}
              width={FOCUS_BOX_SIZE}
              height={FOCUS_BOX_SIZE}
              x={x * ONE_SPACE + CORRECTION_LINE_CONSTANT - FOCUS_BOX_SIZE / 2}
              y={y * ONE_SPACE + CORRECTION_LINE_CONSTANT - FOCUS_BOX_SIZE / 2}
              rx={3}
              ry={3}
              onClick={handleClickField}
              stroke={isSelected ? "black" : ""}
              strokeWidth={isSelected ? "5px" : ""}
            />
          );
        })
      )}
      {ballsInfo.map((info) => (
        <circle
          cx={`${info.pos.x * ONE_SPACE}`}
          cy={`${info.pos.y * ONE_SPACE}`}
          r="23"
          fill={`url('#${info.type}')`}
        />
      ))}
    </SvgBoard>
  );
};

export default OmokField;

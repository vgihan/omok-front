import styled from "@emotion/styled";
import { MouseEventHandler, useState } from "react";
import CrossShape from "../atoms/CrossShape";

const SvgBoard = styled.svg`
  height: 100%;
  width: 100%;
  cursor: pointer;
`;

type BallInfo = {
  type: "black" | "white";
  pos: {
    x: number;
    y: number;
  };
};

const OmokField: React.FC = () => {
  const init: BallInfo[] = [
    { type: "black", pos: { x: 1, y: 1 } },
    { type: "white", pos: { x: 1, y: 2 } },
    { type: "white", pos: { x: 2, y: 1 } },
    { type: "black", pos: { x: 3, y: 4 } },
  ];
  const [ballsInfo, setBallsInfo] = useState<BallInfo[]>(init);
  const unit = Array.from({ length: 13 }).map((v, i) => (i + 2) * 50);
  const coordinate = Array.from({ length: 13 }).map((col) => [...unit]);

  const handleClickField: MouseEventHandler = (e) => {
    console.log(e.clientX);
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

      {coordinate.map((arr, row) =>
        arr.map((pos) => (
          <CrossShape center={{ x: pos, y: (row + 2) * 50 + 0.5 }} />
        ))
      )}
      {ballsInfo.map((info) => (
        <circle
          cx={`${info.pos.x * 50}`}
          cy={`${info.pos.y * 50}`}
          r="23"
          fill={`url('#${info.type}')`}
        />
      ))}
    </SvgBoard>
  );
};

export default OmokField;

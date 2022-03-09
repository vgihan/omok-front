import { MouseEventHandler, useState } from "react";

import styled from "@emotion/styled";

const SvgSpace = styled.svg`
  position: absolute;
  top: -5vmin;
  left: -5vmin;
  width: 80vmin;
  height: 80vmin;
  cursor: pointer;
`;

const Block = styled.circle`
  fill: transparent;
  ${({ type, theme }) =>
    type !== "none"
      ? ""
      : `:hover {
    stroke: ${theme.colors.cottonWhite};
    stroke-width: 5px;
  }
  :active {
    stroke: black;
    stroke-width: 5px;
  }`}
`;

type Stones = {
  [pos in Pos]?: Stone;
};
type Stone = {
  type: "black" | "white" | "none";
};
type Pos = `${PosRange},${PosRange}`;
type PosRange = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15";

const OmokField: React.FC = () => {
  const coordinate: PosRange[] = Array.from({ length: 15 }).map((v, i) => `${i + 1}` as PosRange);
  const init: Stones = coordinate.reduce((stones: Stones, x: PosRange) => {
    coordinate.forEach((y: PosRange) => (stones[`${x},${y}`] = { type: "none" }));
    return stones;
  }, {});
  const [stones, setStones] = useState<Stones>(init);
  const [selected, setSelected] = useState<Pos | null>();

  const handleClickBlock: MouseEventHandler = (e) => {
    if (e.currentTarget.getAttribute("type") !== "none") return;

    const xAttribute = e.currentTarget.getAttribute("cx");
    const yAttribute = e.currentTarget.getAttribute("cy");

    if (!xAttribute || !yAttribute) return;

    const x = `${parseInt(xAttribute) / 50}` as PosRange;
    const y = `${parseInt(yAttribute) / 50}` as PosRange;

    setSelected(`${x},${y}`);
  };

  return (
    <SvgSpace viewBox="0 0 800 800">
      <defs>
        <linearGradient id="black" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#999"></stop>
          <stop offset="50%" stopColor="#363636"></stop>
          <stop offset="100%" stopColor="#000"></stop>
        </linearGradient>
        <linearGradient id="white" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="40%" stopColor="white"></stop>
          <stop offset="90%" stopColor="#555"></stop>
        </linearGradient>
      </defs>
      <circle cx="200.5" cy="200.5" r="6" fill="black" />
      <circle cx="200.5" cy="600.5" r="6" fill="black" />
      <circle cx="600.5" cy="200.5" r="6" fill="black" />
      <circle cx="600.5" cy="600.5" r="6" fill="black" />
      {Object.keys(stones).map((pos: string) => {
        const [x, y] = pos.split(",");
        const type = stones[pos as Pos]?.type;
        return (
          <Block
            key={pos}
            r={type === "none" ? 18 : 23}
            cx={`${parseInt(x) * 50}`}
            cy={`${parseInt(y) * 50}`}
            stroke={selected === pos ? "black" : ""}
            strokeWidth={selected === pos ? "5px" : ""}
            fill={type === "none" ? "transparent" : `url('#${type}')`}
            type={type}
            onClick={handleClickBlock}
          />
        );
      })}
    </SvgSpace>
  );
};

export default OmokField;

import styled from "@emotion/styled";
import { useEffect, useRef } from "react";

const Container = styled.div`
  height: 100%;
`;

const CanvasBoard = styled.canvas`
  height: 100%;
  width: 100%;
  border: 1px solid black;
  cursor: pointer;
`;

const OmokField: React.FC = () => {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvas || !canvas.current) return;
    const ctx = canvas.current.getContext("2d");
    if (!ctx) return;

    const pos = Array.from({ length: 15 }).map((v, i) => (i + 1) * 50 + 0.5);

    ctx.beginPath();

    pos.forEach((dot, idx) => {
      ctx.moveTo(dot, 0.5);
      ctx.lineTo(dot, 800.5);
      ctx.stroke();
      ctx.moveTo(0.5, dot);
      ctx.lineTo(800.5, dot);
      ctx.stroke();
    });
  }, []);

  return (
    <Container>
      <CanvasBoard ref={canvas} width={800} height={800} />
    </Container>
  );
};

export default OmokField;

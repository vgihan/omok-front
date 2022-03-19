import { useEffect } from "react";

import styled from "@emotion/styled";

const Container = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.lightGray};
  width: 80vmin;
  height: 12px;
  box-sizing: border-box;
  margin-top: -4vmin;
`;

const ProgressBox = styled.div<{ time: number }>`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.lightGray};
  animation: timeFlow ${({ time }) => time}s linear forwards;
  @keyframes timeFlow {
    from {
      width: 100%;
    }
    to {
      width: 0%;
    }
  }
`;

interface Props {
  sec: number;
  onEnd: () => void;
}

const TimeBar: React.FC<Props> = ({ sec, onEnd }) => {
  useEffect(() => {
    const timer = setTimeout(onEnd, sec * 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      <ProgressBox time={sec} />
    </Container>
  );
};

export default TimeBar;

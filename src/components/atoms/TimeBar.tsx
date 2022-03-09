import { useEffect } from "react";

import styled from "@emotion/styled";

import theme from "~styles/theme";

const Container = styled.div`
  border: 2px solid ${theme.colors.lightGray};
  width: 80vmin;
  height: 12px;
  box-sizing: border-box;
  margin-top: -4vmin;
`;

const ProgressBox = styled.div<{ time: number }>`
  width: 100%;
  height: 100%;
  background: ${theme.colors.lightGray};
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

const TimeBar: React.FC = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("end !!");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      <ProgressBox time={30} />
    </Container>
  );
};

export default TimeBar;

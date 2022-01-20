import styled from "@emotion/styled";
import OmokField from "./OmokField";

const Container = styled.div`
  display: flex;
  column-gap: calc(5vmin - 1px);
  position: relative;
  background: "transparent";
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  width: 70vmin;
  height: 70vmin;
  margin: 5vmin;
`;

const ColumnBox = styled.div`
  border-left: 1px solid black;
  border-right: 1px solid black;
  width: calc(5vmin - 1px);
  height: 100%;
`;

const RowBox = styled.div`
  position: absolute;
  width: 70vmin;
  height: 5vmin;
  margin: 0 0 calc(5vmin - 1px) 0;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  top: ${({ top }: { top: number }) => `${top}vmin`};
`;

const OmokWrapper: React.FC = () => {
  const linePosition = Array(7)
    .fill(0)
    .map((v, i) => i);

  return (
    <Container>
      {linePosition.map((pos) => (
        <ColumnBox key={`column${pos}`} />
      ))}
      {linePosition.map((pos) => (
        <RowBox top={pos * 10} key={`row${pos}`} />
      ))}
      <OmokField />
    </Container>
  );
};

export default OmokWrapper;

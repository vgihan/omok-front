import styled from "@emotion/styled";

const Container = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr 5fr;
  grid-template-rows: 4fr 1fr;
  width: 85%;
  height: 85%;
`;

const WaitRoomWrapper: React.FC = () => {
  return <Container></Container>;
};

export default WaitRoomWrapper;

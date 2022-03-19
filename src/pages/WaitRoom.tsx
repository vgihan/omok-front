import styled from "@emotion/styled";

import CenterBox from "~components/atoms/CenterBox";
import WaitRoomWrapper from "~components/organisms/WaitRoomWrapper";

const Container = styled(CenterBox)`
  width: 100%;
  height: 100%;
`;

const WaitRoom: React.FC = () => {
  return (
    <Container>
      <WaitRoomWrapper />
    </Container>
  );
};

export default WaitRoom;

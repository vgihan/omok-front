import styled from "@emotion/styled";

import CenterBox from "~components/atoms/flexbox/CenterBox";
import JoinInputSpace from "~components/organisms/join/JoinInputSpace";

const Container = styled(CenterBox)`
  position: absolute;
  top: 20%;
  bottom: 20%;
  width: 100%;
`;

const Join: React.FC = () => {
  return (
    <Container>
      <JoinInputSpace></JoinInputSpace>
    </Container>
  );
};

export default Join;

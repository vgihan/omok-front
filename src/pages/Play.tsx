import styled from "@emotion/styled";

import Topbar from "../components/molecules/Topbar";
import InGameUserProfile from "../components/molecules/InGameUserProfile";
import Button3d from "../components/molecules/Button3d";
import ChatSpace from "../components/organisms/ChatSpace";
import OmokWrapper from "../components/organisms/OmokWrapper";
import TimeBar from "../components/atoms/TimeBar";

import theme from "../styles/theme";

const GridContainer = styled.div`
  display: inline-grid;
  grid-template-columns: 22vw 80vmin 22vw;
  grid-template-rows: 33vmin 40vmin;
  grid-gap: 7vmin 1vw;
  justify-content: center;
  width: 100%;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  justify-content: end;
  align-items: end;
`;

const FieldContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  box-sizing: border-box;
  background-color: ${theme.colors.lightGray};
  border-radius: 3%;
`;

const TimeBarContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 3 / 4;
`;

const PlaceButton = styled(Button3d)`
  font-size: 6vmin;
`;

const SurrenderButton = styled(Button3d)`
  font-size: 4vmin;
`;

const Play: React.FC = () => {
  return (
    <>
      <Topbar />
      <GridContainer>
        <div>
          <InGameUserProfile color="white" name="NAME"></InGameUserProfile>
        </div>
        <div>
          <InGameUserProfile color="black" name="NAME"></InGameUserProfile>
        </div>
        <div>
          <ChatSpace />
        </div>
        <ButtonContainer>
          <PlaceButton width="25" height="25" fontSize="6">
            착수
          </PlaceButton>
          <SurrenderButton width="15" height="8" fontSize="4">
            기권
          </SurrenderButton>
        </ButtonContainer>
        <FieldContainer>
          <OmokWrapper />
        </FieldContainer>
        <TimeBarContainer>
          <TimeBar />
        </TimeBarContainer>
      </GridContainer>
    </>
  );
};

export default Play;

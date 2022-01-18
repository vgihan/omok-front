import styled from "@emotion/styled";
import useOutsideClick from "../hooks/useOutsideClick";
import Topbar from "../components/molecules/Topbar";
import Sidebar from "../components/atoms/Sidebar";
import SidebarProfileBox from "../components/organisms/SidebarProfileBox";
import SidebarRankBox from "../components/organisms/SidebarRankBox";
import SidebarCommunityBox from "../components/organisms/SidebarCommunityBox";
import InGameUserProfile from "../components/molecules/InGameUserProfile";
import ChatSpace from "../components/molecules/ChatSpace";
import Button3d from "../components/molecules/Button3d";

import ChatInputSpace from "../components/molecules/ChatInputSpace";
import { useRef } from "react";
import theme from "../styles/theme";

const GridContainer = styled.div`
  display: inline-grid;
  grid-template-columns: 22vw 80vh 22vw;
  grid-template-rows: 33vh 40vh;
  grid-gap: 7vh 1vw;
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

const PlaceButton = styled(Button3d)`
  font-size: 6vmin;
`;

const SurrenderButton = styled(Button3d)`
  font-size: 4vmin;
`;

const Play: React.FC = () => {
  const TopbarRef = useRef(null);
  const { isClicked, setIsClicked } = useOutsideClick(TopbarRef);

  return (
    <>
      <div ref={TopbarRef}>
        <Sidebar isActive={isClicked}>
          <SidebarProfileBox />
          <SidebarRankBox />
          <SidebarCommunityBox />
        </Sidebar>
      </div>
      <Topbar onClickMenu={() => setIsClicked(true)} />
      <GridContainer>
        <div>
          <InGameUserProfile color="white" name="NAME"></InGameUserProfile>
        </div>
        <div>
          <InGameUserProfile color="black" name="NAME"></InGameUserProfile>
        </div>
        <div>
          <ChatSpace />
          <ChatInputSpace />
        </div>
        <ButtonContainer>
          <PlaceButton width="25" height="25" fontSize="6">
            착수
          </PlaceButton>
          <SurrenderButton width="15" height="8" fontSize="4">
            기권
          </SurrenderButton>
        </ButtonContainer>
        <FieldContainer></FieldContainer>
      </GridContainer>
    </>
  );
};

export default Play;

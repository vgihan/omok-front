import styled from "@emotion/styled";
import ButtonRound from "../components/atoms/ButtonRound";
import TextRighteous from "../components/atoms/TextRighteous";
import Topbar from "../components/molecules/Topbar";
import theme from "../styles/theme";

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 40%;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const PlayText = styled(TextRighteous)`
  font-size: 150px;
`;

const SubText = styled(TextRighteous)`
  font-size: 50px;
`;

const ModeButton = styled(ButtonRound)`
  color: black;
  background-color: ${theme.colors.lightGray};
  width: 25vw;
  height: 25vw;
`;

const Lobby: React.FC = () => {
  return (
    <>
      <Topbar />
      <TitleContainer>
        <PlayText>PLAY</PlayText>
        <SubText>O-MOK</SubText>
      </TitleContainer>
      <ButtonContainer>
        <ModeButton>
          Random
          <br />
          matching
        </ModeButton>
        <ModeButton>
          make
          <br />
          new room
        </ModeButton>
        <ModeButton>Join</ModeButton>
      </ButtonContainer>
    </>
  );
};

export default Lobby;

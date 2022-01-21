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
  justify-content: center;
  column-gap: 10vw;
`;

const PlayText = styled(TextRighteous)`
  font-size: 150px;
  @media (max-width: ${theme.breakpoints.lg}) {
    font-size: 150px;
  }
  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 100px;
  }
`;

const SubText = styled(TextRighteous)`
  font-size: 70px;
  @media (max-width: ${theme.breakpoints.lg}) {
    font-size: 70px;
  }
  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 50px;
  }
`;

const ModeButton = styled(ButtonRound)`
  color: black;
  background-color: ${theme.colors.lightGray};
  font-size: 40px;
  width: 230px;
  height: 230px;
  @media (max-width: ${theme.breakpoints.lg}) {
    font-size: 40px;
    width: 230px;
    height: 230px;
  }
  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 25px;
    width: 130px;
    height: 130px;
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: 15px;
    width: 80px;
    height: 80px;
  }
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

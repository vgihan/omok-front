import styled from "@emotion/styled";
import theme from "../../styles/theme";
import ButtonRound from "../atoms/ButtonRound";
import ProfileImage from "../atoms/ProfileImage";
import TextRighteous from "../atoms/TextRighteous";
import SidebarBoxTitle from "../molecules/SidebarBoxTitle";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Friends = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  column-gap: 10px;
`;

const Friend = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 80px;
  @media (max-width: ${theme.breakpoints.lg}) {
    line-height: 80px;
  }
  @media (max-width: ${theme.breakpoints.md}) {
    line-height: 60px;
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    line-height: 40px;
  }
`;

const FriendProfileImage = styled(ProfileImage)`
  width: 60px;
  height: 60px;
  @media (max-width: ${theme.breakpoints.lg}) {
    width: 60px;
    height: 60px;
  }
  @media (max-width: ${theme.breakpoints.md}) {
    width: 40px;
    height: 40px;
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    width: 20px;
    height: 20px;
  }
`;

const Name = styled(TextRighteous)`
  font-size: 3vmin;
  color: black;
`;

const FightButton = styled(ButtonRound)`
  display: inline;
  font-size: 2vmin;
  color: ${theme.colors.gold};
  background-color: ${theme.colors.cottonWhite};
`;

const SidebarRankBox: React.FC = () => {
  const friends = [
    { img: "abc", name: "kingora" },
    { img: "abc", name: "D_OH.2" },
    { img: "abc", name: "Z_NXII" },
  ];
  return (
    <Container>
      <SidebarBoxTitle>Community</SidebarBoxTitle>
      <Friends>
        {friends.map((friend) => (
          <Friend>
            <FriendProfileImage src={friend.img} className="friend" />
            <Name>{friend.name}</Name>
            <FightButton>fight</FightButton>
          </Friend>
        ))}
      </Friends>
    </Container>
  );
};

export default SidebarRankBox;

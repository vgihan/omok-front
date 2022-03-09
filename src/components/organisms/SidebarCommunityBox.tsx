import styled from "@emotion/styled";

import ButtonRound from "~components/atoms/ButtonRound";
import ProfileImage from "~components/atoms/ProfileImage";
import TextRighteous from "~components/atoms/TextRighteous";
import SidebarBoxTitle from "~components/molecules/SidebarBoxTitle";

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
  height: 40%;
  overflow-y: auto;
`;

const Friend = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 80px;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    line-height: 80px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    line-height: 60px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    line-height: 40px;
  }
`;

const FriendProfileImage = styled(ProfileImage)`
  width: 60px;
  height: 60px;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 60px;
    height: 60px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 40px;
    height: 40px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
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
  color: ${({ theme }) => theme.colors.gold};
  background-color: ${({ theme }) => theme.colors.cottonWhite};
`;

const SidebarRankBox: React.FC = () => {
  const friends = [
    { img: "abc", name: "kingora", id: "1" },
    { img: "abc", name: "D_OH.2", id: "2" },
    { img: "abc", name: "D_OH.2", id: "3" },
    { img: "abc", name: "D_OH.2", id: "4" },
    { img: "abc", name: "D_OH.2", id: "5" },
    { img: "abc", name: "D_OH.2", id: "6" },
    { img: "abc", name: "D_OH.2", id: "7" },
    { img: "abc", name: "D_OH.2", id: "8" },
    { img: "abc", name: "D_OH.2", id: "9" },
    { img: "abc", name: "D_OH.2", id: "10" },
    { img: "abc", name: "Z_NXII", id: "11" },
  ];
  return (
    <Container>
      <SidebarBoxTitle>Community</SidebarBoxTitle>
      <Friends>
        {friends.map((friend) => (
          <Friend key={friend.id}>
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

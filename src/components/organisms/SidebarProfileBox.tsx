import styled from "@emotion/styled";

import ProfileImage from "~components/atoms/ProfileImage";
import TextRighteous from "~components/atoms/TextRighteous";
import SidebarBoxTitle from "~components/molecules/SidebarBoxTitle";
import theme from "~styles/theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const TitleContainer = styled(Container)`
  height: 60px;
  @media (max-width: ${theme.breakpoints.lg}) {
    height: 60px;
  }
  @media (max-width: ${theme.breakpoints.md}) {
    height: 40px;
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    height: 20px;
  }
`;

const ProfileImageContainer = styled(Container)`
  height: 120px;
  @media (max-width: ${theme.breakpoints.lg}) {
    height: 120px;
  }
  @media (max-width: ${theme.breakpoints.md}) {
    height: 100px;
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    height: 80px;
  }
`;

const NameContainer = styled(Container)`
  height: 30px;
  @media (max-width: ${theme.breakpoints.lg}) {
    height: 30px;
  }
  @media (max-width: ${theme.breakpoints.md}) {
    height: 20px;
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    height: 10px;
  }
`;

const MyProfileImage = styled(ProfileImage)`
  @media (max-width: ${theme.breakpoints.lg}) {
    width: 100px;
    height: 100px;
  }
  @media (max-width: ${theme.breakpoints.md}) {
    width: 80px;
    height: 80px;
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    width: 60px;
    height: 60px;
  }
`;

const UserInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 10px;
  font-size: 3vmin;
`;

const Name = styled(TextRighteous)`
  color: black;
`;

const TagNumber = styled(TextRighteous)`
  color: ${theme.colors.lightGray};
`;

const SidebarProfileBox: React.FC = () => {
  return (
    <Container>
      <TitleContainer>
        <SidebarBoxTitle>Profile</SidebarBoxTitle>
      </TitleContainer>
      <ProfileImageContainer>
        <MyProfileImage src="" className="my" />
      </ProfileImageContainer>
      <NameContainer>
        <UserInfoBox>
          <Name>name</Name>
          <TagNumber>#1029</TagNumber>
        </UserInfoBox>
      </NameContainer>
    </Container>
  );
};

export default SidebarProfileBox;

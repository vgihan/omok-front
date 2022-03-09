import styled from "@emotion/styled";

import TextRighteous from "~components/atoms/TextRighteous";
import SidebarBoxTitle from "~components/molecules/SidebarBoxTitle";
import theme from "~styles/theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const RankContainer = styled(Container)`
  justify-content: space-between;
  height: 70px;
`;

const TitleContainer = styled(Container)`
  height: 40px;
`;

const Rank = styled(TextRighteous)`
  font-size: 20px;
  color: black;
`;

const Rating = styled(TextRighteous)`
  font-size: 30px;
  color: ${theme.colors.gold};
`;

const SidebarRankBox: React.FC = () => {
  return (
    <Container>
      <TitleContainer>
        <SidebarBoxTitle>Rank</SidebarBoxTitle>
      </TitleContainer>
      <RankContainer>
        <Rank>9th</Rank>
        <Rating>1194</Rating>
      </RankContainer>
    </Container>
  );
};

export default SidebarRankBox;

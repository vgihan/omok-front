import styled from "@emotion/styled";

import TextRighteous from "~components/atoms/text/TextRighteous";
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

interface Props {
  rating: number;
  tierRank: number;
}

const SidebarRankBox: React.FC<Props> = ({ rating, tierRank }: Props) => {
  return (
    <Container>
      <TitleContainer>
        <SidebarBoxTitle>Rank</SidebarBoxTitle>
      </TitleContainer>
      <RankContainer>
        <Rank>{tierRank}th</Rank>
        <Rating>{rating}</Rating>
      </RankContainer>
    </Container>
  );
};

export default SidebarRankBox;

import styled from "@emotion/styled";

import Ball from "~components/atoms/Ball";
import CenterBox from "~components/atoms/CenterBox";
import ProfileImage from "~components/atoms/ProfileImage";
import TextRighteous from "~components/atoms/TextRighteous";

const Container = styled(CenterBox)`
  flex-direction: column;
  row-gap: 3vh;
  height: 100%;
`;

const InGameProfileImage = styled(ProfileImage)`
  width: 20vmin;
  height: 20vmin;
`;

const TextName = styled(TextRighteous)`
  text-align: center;
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: 40px;
`;

const UserBall = styled(Ball)`
  margin-left: -60px;
`;

type Props = {
  color: "white" | "black";
  name: string;
};

const InGameUserProfile: React.FC<Props> = ({ color, name }: Props) => {
  return (
    <Container>
      <InGameProfileImage className="in_game" src=""></InGameProfileImage>
      <TextName>
        <UserBall color={color} />
        {name}
      </TextName>
    </Container>
  );
};

export default InGameUserProfile;

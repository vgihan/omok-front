import styled from "@emotion/styled";
import theme from "../../styles/theme";
import CenterBox from "../atoms/CenterBox";
import ProfileImage from "../atoms/ProfileImage";
import TextRighteous from "../atoms/TextRighteous";
import Ball from "../atoms/Ball";

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
  color: ${theme.colors.lightGray};
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

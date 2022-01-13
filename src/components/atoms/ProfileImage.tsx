import styled from "@emotion/styled";
import theme from "../../styles/theme";

const Container = styled.img`
  border-radius: 100px;
  background-color: ${theme.colors.gray};
  width: 100px;
  height: 100px;
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

type Props = {
  src: string;
};

const ProfileImage: React.FC<Props> = ({ src }: Props) => {
  return (
    <Container
      onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src = "img/collapsed_menu.svg";
      }}
      src={src}
      alt="profile"
    ></Container>
  );
};

export default ProfileImage;

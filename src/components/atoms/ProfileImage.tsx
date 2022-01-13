import styled from "@emotion/styled";
import theme from "../../styles/theme";

const Container = styled.img`
  border-radius: 100px;
  background-color: ${theme.colors.gray};
  width: 100px;
  height: 100px;
`;

type Props = {
  src: string;
  className: string;
};

const ProfileImage: React.FC<Props> = ({ src, className }: Props) => {
  return (
    <Container
      onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src = "img/collapsed_menu.svg";
      }}
      src={src}
      alt="profile"
      className={className}
    ></Container>
  );
};

export default ProfileImage;

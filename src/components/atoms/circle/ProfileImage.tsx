import styled from "@emotion/styled";

const Container = styled.img`
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.lightGray};
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
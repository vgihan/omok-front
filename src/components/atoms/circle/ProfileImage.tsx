import styled from "@emotion/styled";

const Container = styled.img`
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.lightGray};
  width: 100px;
  height: 100px;
`;

const ProfileImage: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => {
  return <Container onError={(e) => (e.currentTarget.src = "/img/lock.svg")} {...props}></Container>;
};

export default ProfileImage;

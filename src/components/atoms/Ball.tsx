import styled from "@emotion/styled";

type Props = {
  color: "white" | "black";
};

const Ball = styled.span`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.cottonWhite};
  background: ${({ color }: Props) =>
    color === "white"
      ? "linear-gradient(to bottom right, white 45%, #555);"
      : "linear-gradient(-41deg, black, #363636 60%, #999);"};
`;

export default Ball;

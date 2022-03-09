import styled from "@emotion/styled";
import theme from "~styles/theme";

const LoadingCircle = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 1;
  width: 100px;
  height: 100px;
  margin: -75px 0 0 -75px;
  border: 16px solid ${theme.colors.lightGray};
  border-radius: 50%;
  border-top: 16px solid ${theme.colors.gray};
  width: 70px;
  height: 70px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default LoadingCircle;

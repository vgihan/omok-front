import styled from "@emotion/styled";

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 10px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 50%;
  border-top: 10px solid ${({ theme }) => theme.colors.gray};
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

export default Spinner;

import styled from "@emotion/styled";

type Props = {
  sender: string;
};

const ChatElement = styled.li<Props>`
  font-family: roboto;
  font-weight: bold;
  :before {
    content: "${({ sender }) => sender} : ";
  }
`;

export default ChatElement;

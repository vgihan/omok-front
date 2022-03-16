import styled from "@emotion/styled";

import ChatElement from "~components/atoms/ChatElement";
import { Chat } from "~types/model/Chat";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.darkGray};
  box-sizing: border-box;
  opacity: 54;
  width: 100%;
  height: 88%;
  padding: 25px;
`;

const Line = styled.div`
  background-color: ${({ theme }) => theme.colors.cottonWhite};
  height: 1px;
  opacity: 50%;
`;

const RecordContainer = styled.ul`
  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 20%);
  -webkit-mask-size: 10%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: end;
  row-gap: 6px;
  overflow-y: auto;
  height: 100%;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.charcoal};
    border-radius: 10px;
  }
`;

const AllChat = styled(ChatElement)`
  color: ${({ theme }) => theme.colors.gray};
`;

const TeamChat = styled(ChatElement)`
  color: ${({ theme }) => theme.colors.aqua};
  :before {
    content: "[Team] ${({ sender }) => sender} : ";
  }
`;

type Props = {
  chats: Chat[];
};

const ChatRecordBox: React.FC<Props> = ({ chats }: Props) => {
  return (
    <Container>
      <Line />
      <RecordContainer>
        {chats.map((chat, idx) =>
          chat.type === "all" ? (
            <AllChat key={idx} sender={chat.sender}>
              {chat.content}
            </AllChat>
          ) : (
            <TeamChat key={idx} sender={chat.sender}>
              {chat.content}
            </TeamChat>
          ),
        )}
      </RecordContainer>
    </Container>
  );
};

export default ChatRecordBox;

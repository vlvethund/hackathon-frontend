import React from 'react';
import ChatInput from '@/components/Chat/ChatInput';
import MessageBar from '@/components/Chat/MessageBar';
import PromptAdviceContainer from '@/components/Chat/PromptAdviceContainer';
import PromptComponent from '@/components/Chat/PromptComponent';
import { Box } from '@mui/system';

const ChatContainer: React.FC = () => {
  return (
    <Box>
      <PromptAdviceContainer>
        {/*todo: list.map*/}
        <PromptComponent />
        <PromptComponent />
        <PromptComponent />
      </PromptAdviceContainer>

      {/*todo: list.map*/}
      <MessageBar text="안녕하세요" side="left" />
      <MessageBar text="무엇을 도와드릴까요?" side="right" />
      <MessageBar text="저는 어쩌구저쩌구 인데 어떤 보험이 좋을까요?" side="left" />
      <MessageBar text="저는 어쩌구저쩌구 인데 어떤 보험이 좋을까요?" side="left" />
      <MessageBar text="저는 어쩌구저쩌구 인데 어떤 보험이 좋을까요?" side="left" />
      <MessageBar text="저는 어쩌구저쩌구 인데 어떤 보험이 좋을까요?" side="left" />
      <MessageBar text="저는 어쩌구저쩌구 인데 어떤 보험이 좋을까요?" side="left" />
      <MessageBar text="저는 어쩌구저쩌구 인데 어떤 보험이 좋을까요?" side="left" />
      <MessageBar text="저는 어쩌구저쩌구 인데 어떤 보험이 좋을까요?" side="left" />
      <MessageBar text="저는 어쩌구저쩌구 인데 어떤 보험이 좋을까요?" side="left" />
      <MessageBar text="저는 어쩌구저쩌구 인데 어떤 보험이 좋을까요?" side="left" />

      <ChatInput />
    </Box>
  );
};

export default ChatContainer;

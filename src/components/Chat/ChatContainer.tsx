import React from 'react';
import ChatInput from '@/components/Chat/ChatInput';
import MessageBar from '@/components/Chat/MessageBar';
import PromptAdviceContainer from '@/components/Chat/PromptAdviceContainer';
import PromptComponent from '@/components/Chat/PromptComponent';

const ChatContainer: React.FC = () => {
  return (
    <>
      <PromptAdviceContainer>
        {/*todo: list.map*/}
        <PromptComponent />
        <PromptComponent />
        <PromptComponent />
      </PromptAdviceContainer>

      {/*todo: list.map*/}
      <MessageBar />
      <MessageBar />
      <MessageBar />

      <ChatInput />
    </>
  );
};

export default ChatContainer;

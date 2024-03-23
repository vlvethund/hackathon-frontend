import React, { useState } from 'react';
import ChatInput from '@/components/Chat/ChatInput';
import MessageBar from '@/components/Chat/MessageBar';
import PromptAdviceContainer from '@/components/Chat/PromptAdviceContainer';
import PromptComponent from '@/components/Chat/PromptComponent';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import useChatLogStore from '@/store/common/chat';

const ChatContainer: React.FC = () => {
  const { chatLogModels } = useChatLogStore();
  const [inputText, setInputText] = useState<string>('');
  return (
    <Box>
      <Grid>
        <Grid item>
          <PromptAdviceContainer>
            <PromptComponent setInputText={setInputText} />
          </PromptAdviceContainer>
        </Grid>
        <Grid item>
          {chatLogModels.map((model, idx) => (
            <MessageBar
              key={`chat-message-key${idx}`}
              speaker={model.speakerType}
              text={model.text}
              timestamp={model.timestamp}
            />
          ))}
          {/*<MessageBar text="저는 어쩌구저쩌구 인데 어떤 보험이 좋을까요?" side="left" />*/}
          {/*<MessageBar text="저는 어쩌구저쩌구 인데 어떤 보험이 좋을까요?" side="left" />*/}
          {/*<MessageBar text="저는 어쩌구저쩌구 인데 어떤 보험이 좋을까요?" side="left" />*/}
          {/*<MessageBar text="저는 어쩌구저쩌구 인데 어떤 보험이 좋을까요?" side="left" />*/}
          {/*<MessageBar text="저는 어쩌구저쩌구 인데 어떤 보험이 좋을까요?" side="left" />*/}
          {/*<MessageBar text="저는 어쩌구저쩌구 인데 어떤 보험이 좋을까요?" side="left" />*/}
          {/*<MessageBar text="저는 어쩌구저쩌구 인데 어떤 보험이 좋을까요?" side="left" />*/}
          {/*<MessageBar text="저는 어쩌구저쩌구 인데 어떤 보험이 좋을까요?" side="left" />*/}
          {/*<MessageBar text="저는 어쩌구저쩌구 인데 어떤 보험이 좋을까요?" side="left" />*/}
        </Grid>
        <Grid item>
          <ChatInput inputText={inputText} setInputText={setInputText} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChatContainer;

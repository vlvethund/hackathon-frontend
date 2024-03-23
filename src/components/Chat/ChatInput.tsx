import React, { ChangeEvent, useEffect, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import { InputAdornment, TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import useChatLogStore from '@/store/common/chat';

interface Props {
  inputText: string;
  setInputText: (value: string) => void;
}

const ChatInput: React.FC<Props> = ({ inputText, setInputText }) => {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

  const { addUserChat } = useChatLogStore();

  useEffect(() => {
    if (inputText.trim().length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [inputText]);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setInputText(event.currentTarget.value);
  };

  const handleClickSend = () => {
    addUserChat(inputText);
    setInputText('');
  };

  return (
    <>
      <Box paddingTop={4} sx={{ width: 1 }}>
        <TextField
          multiline
          sx={{ width: 1 }}
          maxRows={5}
          value={inputText || ''}
          placeholder="메트라이프 보험에 대해 궁금한 점을 물어보세요!"
          onChange={(event) => handleChange(event)}
          InputProps={{
            endAdornment: (
              <InputAdornment position={'end'}>
                <IconButton disabled={buttonDisabled} onClick={handleClickSend} size="large">
                  <SendIcon fontSize="inherit" />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </>
  );
};

export default ChatInput;

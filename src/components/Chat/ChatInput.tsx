import React, { useEffect, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import { InputAdornment, TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';

const ChatInput: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (inputText.trim().length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [inputText]);

  return (
    <>
      <Box padding={4} sx={{ width: 1 }}>
        <TextField
          multiline
          sx={{ width: 1 }}
          maxRows={5}
          onChange={(event) => setInputText(event.currentTarget.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position={'end'}>
                <IconButton
                  disabled={buttonDisabled}
                  onClick={() => console.log('send button clicked')}
                  size="large"
                >
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

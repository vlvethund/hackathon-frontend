import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import useChatLogStore from '@/store/common/chat';

const options = [
  { keyword: '유튜브 채널 빌딩', text: '유튜브 채널 빌등을 하려면 어떻게 해야할까요?' },
  { keyword: '정책 추적', text: '정책 추적을 하려면 어떻게 해야할까요?' },
  { keyword: '운영사', text: '운영사 정보를 알아보고싶어요' },
  { keyword: '업무 자동화', text: '업무 자동화 할수있는 툴을 알려주세요' },
];
const userName = '사용자'; // 사용자 이름은 동적으로 설정되어야 합니다.

interface Props {
  setInputText: (value: string) => void;
}

const PromptComponent: React.FC<Props> = ({ setInputText }) => {
  const { chatLogModels } = useChatLogStore();

  const handleSelect = (index: number, text: string) => {
    setInputText(text);
  };

  return (
    <>
      {chatLogModels.length === 0 && (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography
            variant="h4"
            gutterBottom
            style={{
              background: '-webkit-linear-gradient(45deg, #0090DA 30%, #A4CE4E 80%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {userName}님, 안녕하세요
          </Typography>
          <Typography variant="h4" gutterBottom>
            무엇을 도와드릴까요?
          </Typography>
          <Typography textAlign="center" mt={2} sx={{ fontStyle: 'italic' }}>
            아래와 같은 질문을 해보세요
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
            {options.map((option, index) => (
              <Button
                sx={{
                  // background: '#0090DA',
                  width: '200px',
                  height: '150px',
                  borderRadius: '16px',
                }}
                key={option.keyword}
                variant={'outlined'}
                color="primary"
                onClick={() => handleSelect(index, option.text)}
              >
                <Typography textAlign="center">{option.keyword}</Typography>
              </Button>
            ))}
          </Box>
        </Box>
      )}
    </>
  );
};

export default PromptComponent;

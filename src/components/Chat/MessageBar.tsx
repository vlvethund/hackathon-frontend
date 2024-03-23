import React from 'react';
import { Card, CardContent, Grid } from '@mui/material';

interface Props {
  side?: 'left' | 'right';
  text: string;
}

const MessageBar: React.FC<Props> = ({ side, text }) => {
  const className = side === 'left' ? 'flex justify-end' : 'flex justify-start';
  const color = side === 'left' ? 'white' : '#A4CE4E';

  return (
    <Grid className={className}>
      <Card
        sx={{ borderRadius: '40px', width: 'inherit', backgroundColor: color }}
        className="mt-5 flex"
      >
        <CardContent>{text}</CardContent>
      </Card>
    </Grid>
  );
};

export default MessageBar;

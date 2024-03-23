import React, { useEffect, useState } from 'react';
import { Card, CardActions, CardContent, Grid } from '@mui/material';
import { Speaker } from '@/model/common/chat';
import moment, { Moment } from 'moment';

interface Props {
  speaker: Speaker;
  text: string;
  timestamp: Moment;
}

const MessageBar: React.FC<Props> = ({ speaker, text, timestamp }) => {
  const className = speaker !== Speaker.Ai ? 'flex justify-end' : 'flex justify-start';
  const color = speaker !== Speaker.Ai ? 'white' : '#A4CE4E';

  const [time, setTime] = useState('');

  useEffect(() => {
    const just = moment().diff(timestamp, 'minute') < 5;

    if (just) {
      setTime('just now');
    } else {
      const formatted = timestamp.format('hh:mm');
      setTime(formatted);
    }
  }, [timestamp]);

  return (
    <Grid item className={className}>
      <Card
        sx={{ borderRadius: '40px', width: 'inherit', backgroundColor: color }}
        className="mt-5 flex"
      >
        <CardContent>{text}</CardContent>
        <CardActions>
          <div style={{ fontSize: '10px' }}>{time}</div>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default MessageBar;

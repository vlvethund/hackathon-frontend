import * as React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { title } from '@/config';
import image from '../../../public/pwa-192x192.png';
import { ChangeEvent, useState } from 'react';

interface InputFieldProps {
  label: string;
  value: string;
  helperText: string;
  className?: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  helperText,
  className,
  onChange,
}) => {
  return (
    <Box className={className}>
      <TextField
        label={label}
        value={value}
        variant="outlined"
        fullWidth
        size="small"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={onChange}
      />
      <Typography variant="caption" color="textSecondary">
        {helperText}
      </Typography>
    </Box>
  );
};

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <Box component="form" mt={3}>
      <InputField
        label="Id"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
        helperText="Helper text"
      />
      <InputField
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        helperText="Helper text"
        className="mt-3"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        size="large"
        className="mt-8"
        sx={{
          background: 'linear-gradient(90deg, #0090DA 30%, #A4CE4E 80%)',
        }}
        onClick={() => navigate('/welcome')}
      >
        Log In
      </Button>
    </Box>
  );
};

const Login: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      px={4}
      py={10}
      bgcolor="background.paper"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        mt={14}
        maxWidth="347px"
        width="100%"
      >
        <Box display="flex" flexDirection="column" textAlign="center" mb={5}>
          <Box component="img" src={image} alt="Logo" alignSelf="center" width={48} height={48} />
          <Typography variant="h4" fontWeight="bold" mt={4}>
            {title}
          </Typography>
        </Box>
        <LoginForm />
      </Box>
    </Box>
  );
};

export default Login;

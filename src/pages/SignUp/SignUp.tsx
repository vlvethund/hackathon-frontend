import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

type SignUpField = {
  name: string;
  email: string;
  password: string;
  joinedInsurance: string;
  agreed: boolean;
};

const SignUp = () => {
  const [field, setField] = useState<SignUpField>({
    email: '',
    joinedInsurance: 'insurance-none',
    name: '',
    password: '',
    agreed: false,
  });
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState<boolean>(true);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updated = { ...field };
    updated.name = event.currentTarget.value;
    setField(updated);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updated = { ...field };
    updated.email = event.currentTarget.value;
    setField(updated);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updated = { ...field };
    updated.password = event.currentTarget.value;
    setField(updated);
  };

  const handleInsuranceChange = (event: SelectChangeEvent) => {
    const updated = { ...field };
    updated.joinedInsurance = event.target.value;
    setField(updated);
  };

  const handleAgreement = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updated = { ...field };
    updated.agreed = event.target.checked;
    setField(updated);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // Submit form here
    console.log({
      name: data.get('fullName'),
      email: data.get('email'),
      password: data.get('password'),
      joinedInsurance: data.get('joined-insurance'),
    });
  };

  useEffect(() => {
    console.log(`field changed: ${JSON.stringify(field)}`);

    if (
      field.name.trim().length > 0 &&
      field.email.trim().length > 0 &&
      field.password.trim().length > 0 &&
      field.agreed
    ) {
      setSubmitButtonDisabled(false);
    } else {
      setSubmitButtonDisabled(true);
    }
  }, [field]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="full-name"
                name="fullName"
                required
                fullWidth
                onChange={handleNameChange}
                id="fullName"
                label="이름"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="이메일 주소"
                onChange={handleEmailChange}
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="비밀번호"
                type="password"
                onChange={handlePasswordChange}
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel id="joined-insurance-label">가입된 보험</InputLabel>
              <Select
                required
                fullWidth
                labelId="joined-insurance-label"
                id="joined-insurance"
                name="joined-insurance"
                onChange={handleInsuranceChange}
                value={field.joinedInsurance}
                label="가입된 보험"
              >
                <MenuItem value={'insurance-none'}>없음</MenuItem>
                <MenuItem value={'insurance-1'}>보험상품1</MenuItem>
                <MenuItem value={'insurance-2'}>보험상품2</MenuItem>
                <MenuItem value={'insurance-3'}>보험상품3</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    required
                    checked={field.agreed}
                    onChange={handleAgreement}
                    value="agreeToPolicy"
                    color="primary"
                  />
                }
                label="사이트 약관에 동의합니다."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={submitButtonDisabled}
            sx={{ mt: 3, mb: 2 }}
          >
            회원가입
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/page-3" variant="body2">
                계정이 있으신가요? 로그인하기
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;

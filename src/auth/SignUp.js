import * as React from 'react';
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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useState } from "react";


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {

    const [inputText, setInputText] = useState({
        email: '',
        password: '',
        telNumber: '',
        privacyCheck: false // 기본값으로 false 설정
      });
    
      const { email, password, telNumber, privacyCheck} = inputText;
    
      const onChange = (e) => {
        const { value, name, checked } = e.target;
        setInputText({
          ...inputText,
          [name]: name === "privacyCheck" ? checked : value // privacyCheck는 boolean으로 설정
        });
      };


  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/auth/signUp', {
        email: email,
        password: password,
        telNumber: telNumber,
        privacyCheck: privacyCheck // boolean 값 그대로 전달
    }).then(function (response) {
        console.log(response.data);
        // 로그인 성공 시 다음 동작을 수행할 수 있습니다.
      }).catch(function (error) {
        console.log(error);
        // 로그인 실패 시 다음 동작을 수행할 수 있습니다.
      });

  };

  return (
    <ThemeProvider theme={defaultTheme}>
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
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={onChange}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={onChange}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="telNumber"
                  label="telNumber"
                  id="telNumber"
                  autoComplete="telNumber"
                  onChange={onChange}

                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox name="privacyCheck" color="primary" />}
                  label="동의체크하셈"
                  onChange={onChange}

                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

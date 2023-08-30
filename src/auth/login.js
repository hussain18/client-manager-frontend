import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { login } from '../api'
import { Alert, AlertTitle, Snackbar } from '@mui/material'

const defaultTheme = createTheme()

export const Login = () => {
  const [snackOpen, setSnackOpen] = React.useState(false)
  const [snackContent, setSnackContent] = React.useState({
    message: '',
    title: '',
  })
  const [loginDetails, setLoginDetails] = React.useState({
    username: '',
    password: '',
  })

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setSnackOpen(false)
    setSnackContent({
      message: '',
      title: '',
    })
  }

  const handleChange = (event) => {
    const newLoginDetails = { ...loginDetails }
    newLoginDetails[event.target.name] = event.target.value

    setLoginDetails(newLoginDetails)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { err } = await login(loginDetails)

    if (err) {
      setSnackContent({ message: err.message, title: err.statusText })
      setSnackOpen(true)
    }
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Snackbar
            open={snackOpen}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <Alert
              onClose={handleClose}
              severity='error'
              sx={{ width: '100%' }}
            >
              <AlertTitle>{snackContent.title || 'Error'}</AlertTitle>
              {snackContent.message}
            </Alert>
          </Snackbar>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Admin Sign in
          </Typography>
          <Box
            component='form'
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin='normal'
              required
              fullWidth
              id='text'
              label='Admin Username'
              name='username'
              type='text'
              value={loginDetails.username}
              onChange={handleChange}
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              value={loginDetails.password}
              onChange={handleChange}
              autoComplete='current-password'
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

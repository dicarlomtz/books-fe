import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'

import { useDispatch, useSelector } from 'react-redux'
import { useMemo } from 'react'
import { authenticationStatuses } from '../../store/auth/authSlice'
import { registerValidations } from '../helpers/formValidations'
import { useFormik } from 'formik'
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks'

export const RegisterPage = () => {
  const { status, errorMessage } = useSelector(state => state.auth)
  const isAuthenticating = useMemo(() => status === authenticationStatuses.authenticating, [status])

  const dispatch = useDispatch()

  const registerForm = useFormik({
    initialValues: {
      name: '',
      username: '',
      email: '',
      password: ''
    },
    validationSchema: registerValidations,
    onSubmit: (values) => {
      dispatch(startCreatingUserWithEmailPassword(values))
    }
  })

  const { touched, errors, values, handleChange } = registerForm

  return (
      <AuthLayout title='Register'>
            <form onSubmit={ registerForm.handleSubmit } >
              <Grid container>

                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField
                            label="Full name"
                            type="text"
                            placeholder="Your full name"
                            id='name'
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            error={touched.name && Boolean(errors.name)}
                            helperText={touched.name && errors.name}
                            fullWidth />
                    </Grid>

                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField
                            label="Username"
                            type="text"
                            placeholder="Your username"
                            id='username'
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                            error={touched.username && Boolean(errors.username)}
                            helperText={touched.username && errors.username}
                            fullWidth />
                    </Grid>

                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField
                            label="email"
                            type="email"
                            placeholder="example@domain.com"
                            id='email'
                            name="email"
                            value={ values.email }
                            onChange={handleChange}
                            error={touched.email && Boolean(errors.email)}
                            helperText={touched.email && errors.email}
                            fullWidth />
                    </Grid>

                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField
                            label="Password"
                            type="password"
                            placeholder="Your password"
                            id='password'
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            error={touched.password && Boolean(errors.password)}
                            helperText={touched.password && errors.password}
                            fullWidth
                            />
                    </Grid>

                  <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                       <Grid item xs={ 12 } display={errorMessage ? '' : 'none'}>
                          <Alert severity='error' >{ errorMessage }</Alert>
                        </Grid>

                        <Grid item xs={ 12 }>
                          <Button disabled={ isAuthenticating } variant="contained" type="submit" fullWidth>Register</Button>
                        </Grid>
                    </Grid>

                  <Grid container direction='row' justifyContent='end'>
                        <Typography sx={{ mr: 1 }}>Do you have an account?</Typography>
                        <Link component={ RouterLink } color='inherit' to='/auth/login'>
                            Login
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
  )
}

import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useDispatch, useSelector } from 'react-redux'
import { startEmailPasswordLogin } from '../../store/auth/thunks'
import { useMemo } from 'react'
import { authenticationStatuses } from '../../store/auth/authSlice'
import { useFormik } from 'formik'
import { loginValidations } from '../helpers/formValidations'

export const LoginPage = () => {
  const { status, errorMessage } = useSelector(state => state.auth)
  const isAuthenticating = useMemo(() => status === authenticationStatuses.checking, [status])

  const dispatch = useDispatch()

  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: loginValidations,
    onSubmit: (values) => {
      dispatch(startEmailPasswordLogin(values))
    }
  })

  const { touched, errors, values, handleChange } = loginForm

  return (
        <AuthLayout title='Login'>
            <form onSubmit={loginForm.handleSubmit}>
                <Grid container>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField
                            label="email"
                            type="email"
                            placeholder="example@domain.com"
                            fullWidth
                            id='email'
                            name='email'
                            value={values.email}
                            error={touched.email && Boolean(errors.email)}
                            helperText={touched.email && errors.email}
                            onChange={handleChange} />
                    </Grid>

                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField
                            label="Password"
                            type="password"
                            placeholder="Your password"
                            fullWidth
                            id='password'
                            name='password'
                            value={values.password}
                            error={touched.password && Boolean(errors.password)}
                            helperText={touched.password && errors.password}
                            onChange={handleChange} />
                    </Grid>

                   <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                       <Grid item xs={ 12 } display={errorMessage ? '' : 'none'}>
                          <Alert severity='error' >{ errorMessage }</Alert>
                        </Grid>

                        <Grid item xs={ 12 }>
                          <Button disabled={ isAuthenticating } variant="contained" type="submit" fullWidth>Login</Button>
                        </Grid>
                    </Grid>

                    <Grid container direction='row' justifyContent='end'>
                    <Typography sx={{ mr: 1 }}>Don`t you have an account?</Typography>
                        <Link component={ RouterLink } color='inherit' to='/auth/register'>
                            Register
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
  )
}

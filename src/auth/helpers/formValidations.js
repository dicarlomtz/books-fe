import * as Yup from 'yup'

export const loginValidations = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
})

export const registerValidations = Yup.object({
  username: Yup.string()
    .required('User name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
})

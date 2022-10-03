import { instance } from '../instance'

const storeAuthData = (token, authData) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`
  localStorage.authData = JSON.stringify(authData)
}

export const loginUserWithEmailPassword = async (formData) => {
  try {
    const result = await instance.post('auth/login', formData)
    const { data, status } = result
    const { auth_token: token, user } = data
    const { email, password } = formData

    storeAuthData(token, { email, password })

    return {
      ok: status === 200,
      token,
      user
    }
  } catch (error) {
    const { response } = error
    const { status } = response
    const errorMessage = response.data ? response.data.message : error.message

    return {
      ok: status === 200,
      token: null,
      user: null,
      errorMessage
    }
  }
}

export const registerUserWithEmailPassword = async (formData) => {
  try {
    const result = await instance.post('auth/register', formData)
    const { data, status } = result
    const { auth_token: token, user } = data
    const { email, password } = formData

    storeAuthData(token, { email, password })

    return {
      ok: status === 200,
      token,
      user
    }
  } catch (error) {
    const { response } = error
    const { status } = response
    const errorMessage = response.data ? response.data.message : error.message

    return {
      ok: status === 200,
      token: null,
      user: null,
      errorMessage
    }
  }
}

export const initialAthentication = async () => {
  try {
    await instance.get('sanctum/csrf-cookie')
    const authData = JSON.parse(localStorage.authData)
    return {
      authData,
      errorMessage: null
    }
  } catch (error) {
    return {
      errorMessage: error.message,
      authData: null
    }
  }
}

export const logoutUser = async () => {
  try {
    const result = await instance.get('auth/logout')
    const { data, status } = result

    return {
      ok: status === 200,
      message: data.message,
      errorMessage: null
    }
  } catch (error) {
    const { response } = error
    const { status } = response
    const errorMessage = response.data ? response.data.message : error.message

    return {
      ok: status === 200,
      message: null,
      errorMessage
    }
  }
}

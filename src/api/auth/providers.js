import { instance } from '../instance'

export const loginUserWithEmailPassword = async (formData) => {
  try {
    const result = await instance.post('auth/login', formData)
    const { data, status } = result
    const { auth_token: token, user } = data

    instance.defaults.headers.common.Authorization = `Bearer ${token}`

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

    instance.defaults.headers.common.Authorization = `Bearer ${token}`

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
  } catch (error) {
    return {
      errorMessage: error.message
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

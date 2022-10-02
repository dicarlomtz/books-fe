import { loginUserWithEmailPassword, registerUserWithEmailPassword } from '../../api/auth/providers'
import { authenticating, login, logout } from './authSlice'

export const startEmailPasswordLogin = (data) => {
  return async (dispatch) => {
    dispatch(authenticating())

    const result = await loginUserWithEmailPassword(data)

    if (!result.ok) return dispatch(logout(result))

    dispatch(login(result))
  }
}

export const startCreatingUserWithEmailPassword = (data) => {
  return async (dispatch) => {
    dispatch(authenticating())

    const result = await registerUserWithEmailPassword(data)

    if (!result.ok) return dispatch(logout(result))

    dispatch(login(result))
  }
}

export const startLogout = () => {
  return async (dispatch) => {
    dispatch(logout())
  }
}

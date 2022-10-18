import { initialAthentication, loginUserWithEmailPassword, logoutUser, registerUserWithEmailPassword } from '../../api/auth/providers'
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
    const result = await logoutUser()
    if (result.ok) dispatch(logout())
  }
}

export const initialAuthentication = () => {
  return async (dispatch) => {
    const { authData } = await initialAthentication()

    if (authData) {
      const result = await loginUserWithEmailPassword(authData)

      if (!result.ok) return dispatch(logout())

      dispatch(login(result))
    }

    if (!authData) dispatch(logout())
  }
}

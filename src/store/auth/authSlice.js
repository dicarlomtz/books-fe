import { createSlice } from '@reduxjs/toolkit'

export const authenticationStatuses = {
  authenticating: 'authenticating',
  authenticated: 'authenticated',
  notAuthenticated: 'notAuthenticated'
}

const startingState = {
  status: authenticationStatuses.notAuthenticated,
  name: null,
  username: null,
  email: null,
  token: null,
  errorMessage: null
}

const loginReducer = (state, { payload }) => {
  state.status = authenticationStatuses.authenticated
  state.name = payload.user.name
  state.username = payload.user.username
  state.email = payload.user.email
  state.token = payload.token
  state.errorMessage = null
}

const logoutReducer = (state, { payload }) => {
  state.status = authenticationStatuses.notAuthenticated
  state.name = null
  state.username = null
  state.email = null
  state.token = null
  state.errorMessage = payload?.errorMessage
}

const authenticatingReducer = state => {
  state.status = authenticationStatuses.authenticating
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: startingState,
  reducers: {
    login: loginReducer,
    logout: logoutReducer,
    authenticating: authenticatingReducer
  }
})

export const { login, logout, authenticating } = authSlice.actions

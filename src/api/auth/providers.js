import { instance } from '../instance'

export const loginUserWithEmailPassword = async data => {
  try {
    const result = await instance.post('auth/login', data)
    console.log(result)
    return result
  } catch (error) {
    console.log(error)
  }
}

export const registerUserWithEmailPassword = async data => {
  try {
    const result = await instance.post('auth/register', data)
    console.log(result)
    return result
  } catch (error) {
    console.log(error)
  }
}

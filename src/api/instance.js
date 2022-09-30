
import axios from 'axios'

const BASE_URL = 'http://localhost/'
export const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000
})

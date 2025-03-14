import axios, { AxiosError } from 'axios'

const api = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:3001',
})

const errorHandler = (error: AxiosError) => {
  const statusCode = error.response?.status

  // logging only errors that are not 401
  if (statusCode && statusCode !== 401) {
    console.error(error)
  }

  return Promise.reject(error)
}

api.interceptors.response.use(undefined, (error) => {
  return errorHandler(error)
})

export default api

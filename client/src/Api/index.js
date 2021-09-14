import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:4000' })

API.interceptors.request.use(req => {
  const token = JSON.parse(localStorage.getItem('profile'))?.token;
  if (token) {
    req.headers.Authorization = `bearer ${token}`
  }
  return req
})

//auth
export const createUserApi = formData => API.post(`/auth/sineUp`, formData)
export const loginUserApi = formData => API.post(`/auth/login`, formData)


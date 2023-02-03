import axios from 'axios'

export const getUsers = axios.create({
  baseURL: 'https://reqres.in/api',
})

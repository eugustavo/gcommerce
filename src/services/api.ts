import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://gcommerce-api.up.railway.app',
})

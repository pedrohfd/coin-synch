import axios from 'axios'

export const coinApi = axios.create({
  baseURL: '	https://rest.coinapi.io/',
})

export const usersApi = axios.create({
  baseURL: 'http://localhost:3000/',
})

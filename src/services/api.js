import axios from "axios";

export const api = axios.create({
  baseURL: 'https://rocketfood-backend.onrender.com' || 'localhost:3000'
})

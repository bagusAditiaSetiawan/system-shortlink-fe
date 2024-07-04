import axios from 'axios'

export interface ResponseError {
    errors: string[]
}


export const client_request = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL_API
})
import axios from 'axios'

export interface ResponseError {
    errors: string[]
}


export const client_request = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
})
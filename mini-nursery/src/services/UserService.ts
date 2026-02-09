import axios from "axios"

export type User = {
    id: number
    name: string
    email?: string
    phone?: string
    company?: {
        name?: string
        catchPhrase?: string
        bs?: string
    }
    address?: {
        street?: string
        suite?: string
        city?: string
        zipcode?: string
    }
}

const API_URL = "https://jsonplaceholder.typicode.com/users"

export const getUsers = async (): Promise<User[]> => {
    const response = await axios.get(API_URL)
    return response.data
}

export const getUser = async (id: number): Promise<User> => {
    const response = await axios.get(`${API_URL}/${id}`)
    return response.data
}

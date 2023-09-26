import { User } from "@/interface/user"

//PETICION para obtener usuarios
export const getUsers = async () => {
    try {
        const url = 'https://jsonplaceholder.typicode.com/users'
        const response = await fetch(url, {
            method: "get",
        })
        const result = await response.json()
        return {
            type: "ok",
            result: result as User[]
        }
    } catch (error) {
        return {
            type: "error",
            error: new Error(`${error}`)
        }
    }
}
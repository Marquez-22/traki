import { Todos } from "@/interface/todos"

export const getTodos = async () =>{
    try {
        const url = 'https://jsonplaceholder.typicode.com/todos'
        const response = await fetch (url, {
            method:"get",
        } )
        const result = await response.json()
        return{
            type: "ok",
            result: result as Todos[]
        }
    } catch (error) {
        return{
            type: "error",
            error: new Error (`${error}`)
        }
        
    }
}
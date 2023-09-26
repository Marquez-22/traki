import { getUsers } from "../fetch/Users"
import { User } from "@/interface/user"
import { useEffect, useState } from "react"


export const useUser = () => {
    const [loader, setLoader] = useState(false)
    const [users, setUsers] = useState<User[] | undefined>(undefined)
    const [error, setError] = useState<Error | undefined>(undefined)


    const onLoadUser = async () => {
        const response = await getUsers()
        if (response.type == "ok") {
            setUsers(response.result)
        } else {
            setError(response.error)
        }
        setLoader(true)
    }
    useEffect(() => {
        onLoadUser()
    }, [])

    return {
        users,
        error,
        loader
    }
}

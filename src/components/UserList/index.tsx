import { useUser } from "@/hook/useUser"
import { ReactNode } from "react"

export type UserListType = "userlist1" | "userlist2" | "userlist3"

export interface UserListProps {
    className?: string
    styleTemplate?:UserListType
}
export const UserList = ({ className="",styleTemplate="userlist1" }: UserListProps) => {
    const {error,loader,users} = useUser()
    return (
        <>
            <div className={`${className} ${styleTemplate}`}>
                {
                    !loader ? 
                    <>
                        Cargando.....
                    </>
                    :
                    <>
                        {error && error.message}

                        {
                            users && users.map((ele,i)=>{
                                return <>
                                    <div key={i}>
                                        {ele.name}
                                    </div>
                                </>
                            })
                        }
                    </>
                }
            </div>
        </>
    )
}
import { ReactNode } from "react"

type ContainerType = "Container"|"Container1"
export interface ContainerProps {
    styleTemplate?: ContainerType
    children: ReactNode
}

export const Container = ({ children, styleTemplate= "Container" }: ContainerProps) => {
    return (<>
        <div className={`Container ${styleTemplate}`}>
            {children}
        </div>
    </>)
}
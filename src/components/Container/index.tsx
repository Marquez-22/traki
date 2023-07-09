import { ReactNode } from "react"

type ContainerType = "Container1"
export interface ContainerProps {
    styleTemplate?: ContainerType
    children: ReactNode
}

export const Container = ({ children, styleTemplate= "Container1" }: ContainerProps) => {
    return (<>
        <div className={`Container ${styleTemplate}`}>
            {children}
        </div>
    </>)
}
import { ReactNode } from "react"

export type ButtonType = "btn1" | "btn2" | "btn3"

export interface ButtonProps {
    children?: ReactNode
    className?: string
    styleTemplate?:ButtonType
}
export const Button = ({ children,className="",styleTemplate="btn1" }: ButtonProps) => {
    return (
        <>
            <button className={`btn1 ${className} ${styleTemplate}`}>
                {children}
            </button>
        </>
    )
}
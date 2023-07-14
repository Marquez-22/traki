import { ReactNode } from "react"

export type ButtonType = "btn" | "btn1" | "btn2"

export interface ButtonProps {
    children?: ReactNode
    className?: string
    styleTemplate?:ButtonType
}
export const Button = ({ children,className="",styleTemplate="btn" }: ButtonProps) => {
    return (
        <>
            <button className={`btn ${className} ${styleTemplate}`}>
                {children}
            </button>
        </>
    )
}
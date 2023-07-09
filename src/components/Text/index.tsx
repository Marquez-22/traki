import { ReactNode } from "react"

export type TextType = "text"|"text1" | "text2"|"text3"|"text4"

export interface TextProps {
    children?:ReactNode
    styleTemplate?:TextType
    className?:string
}

export const Text = ({children,styleTemplate="text",className=""}:TextProps) =>{
    return (
        <p className={`text ${styleTemplate} ${className}`}>
            {children}
        </p>
    )
}
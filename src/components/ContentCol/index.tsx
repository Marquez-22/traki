import { ReactNode } from "react"



export type ContentColType = "ContentCol1" | "ContentCol2"

export interface ContentColProps {
    children?: ReactNode
    styleTemplate?: ContentColType
}
export const ContentCol = ({ styleTemplate = "ContentCol1", children }: ContentColProps) => {
    return (
        <div className={`ContentCol ${styleTemplate}`}>
            {children}
        </div>
    )
}
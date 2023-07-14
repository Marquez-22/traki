import { ReactNode } from "react"

type InformationProductType = "InformationProduct"|"InformationProduct1"
export interface InformationProductProps {
    styleTemplate?: InformationProductType
    children: ReactNode
}

export const InformationProduct = ({ children, styleTemplate= "InformationProduct" }: InformationProductProps) => {
    return (<>
        <div className={`InformationProduct ${styleTemplate}`}>
            {children}
        </div>
    </>)
}
import { ReactNode } from "react"
import { CircleImages, CircleImagesProps } from "../CircleImages"

export type ThemeContentType = "ThemeContent" | "ThemeContent1"
export interface ThemeContentProps {
    styleTemplate?: ThemeContentType
    circleProduct: CircleImagesProps[]


}

export const ThemeContent = ({ circleProduct, styleTemplate = "ThemeContent" }: ThemeContentProps) => {
    return (<>
        <div className={`ThemeContent ${styleTemplate}`}>
            {
               circleProduct.map((element, index) => {
                return (<>
                    <CircleImages
                        key={index}
                        circleimg={element.circleimg}
                        texto={element.texto}
    
    
                    />
    
                </>)
    
    
            })
    
        }
     
        </div>
    </>)
}
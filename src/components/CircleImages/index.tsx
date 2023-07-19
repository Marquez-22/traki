import { ReactNode } from "react"
import { Text } from "../Text"

export type CircleImagesType = "CircleImages"|"CircleImages1"
export interface CircleImagesProps {
    styleTemplate?: CircleImagesType
    circleimg:string
    texto:string
}

export const CircleImages = ({ texto,circleimg, styleTemplate= "CircleImages" }: CircleImagesProps) => {
    return (<>
        <div className={`CircleImages ${styleTemplate}`}>
            <div className="ContentImage">
                <img src={circleimg} className="MiniaturasCategorias"></img>  
            </div>
          
            <Text styleTemplate="text2">
                {texto}
            </Text>
        </div>
    </>)
}
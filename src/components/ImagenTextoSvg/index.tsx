
import { ReactNode } from "react"
import { Home } from "../../SVG/home"
import { Text } from "../Text"


export type ImgTextoSvgType = "ImgTextoSvg" | "ImgTextoSvg1"

export interface ImgTextoSvgProps {
    styleTemplate?: ImgTextoSvgType
    text: string
    svg?: ReactNode
}
export const ImgTextoSvg = ({ styleTemplate = "ImgTextoSvg",
    text,
    svg = <Home className="home" />
}: ImgTextoSvgProps) => {
    return (
        <div className={`ImgTextoSvg ${styleTemplate}`}>
            <img src="/img/rojotraki.png" className="rojotraki"></img>
            <Text styleTemplate="text">
                {text}
            </Text>
            {svg}
        </div>

    )





}
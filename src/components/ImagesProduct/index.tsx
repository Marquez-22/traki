import { ReactNode } from "react"
import { ContentInformation } from "../ContentInformation"

export type ImagesProductType = "ImagesProduct" | "ImagesProduct1" | "ImagesProduct2"

export interface ImagesProductProps {
    styleTemplate?: ImagesProductType

    img: string
    text: ReactNode
    button: ReactNode
}
export const ImagesProduct = ({ img, styleTemplate = "ImagesProduct", button, text }: ImagesProductProps) => {
    return (
        <>
            <div className={`ImagesProducto ${styleTemplate}`}>
                <img src={img} className="traki1"></img>
                <div className="buttonText">
                    <ContentInformation
                        button={button}
                        text={text}
                    />

                </div>

            </div>


        </>
    )
}
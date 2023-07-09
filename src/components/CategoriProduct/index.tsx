import { ReactNode } from "react"
import { ImgTextoSvg } from "../ImagenTextoSvg"
import { ContentCol } from "../ContentCol"
import { ImagesProduct, ImagesProductProps } from "../ImagesProduct"
import { Container } from "../Container"



export type CategoriProductType = "CategoriProduct" | "CategoriProduct1"

export interface CategoriProductProps {
    styleTemplate?: CategoriProductType
    nameCategory: string
    svgCategory?: ReactNode
    listCategorias: ImagesProductProps[]
}
export const CategoriProduct = ({ styleTemplate = "CategoriProduct1", nameCategory, svgCategory, listCategorias }: CategoriProductProps) => {
    return (
        <Container>
            <div className={`CategoriProduct ${styleTemplate}`}>
                <ImgTextoSvg
                    text={nameCategory}
                    svg={svgCategory}
                />
                <ContentCol>
                    {
                        listCategorias.map((element, index) => {
                            return (<>
                                <ImagesProduct
                                    key={index}

                                    img={element.img}
                                    button={element.button}
                                    text={element.text}
                                />
                            </>)
                        })
                    }
                </ContentCol>
            </div>
        </Container>
    )
}
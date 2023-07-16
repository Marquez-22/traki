import { ReactNode } from "react"
import { Text } from "../Text"
import { parseNumber } from "../../functions/parseNumber"
import { InputSelect, Option } from "../InputSelect"
import { InputQuantity } from "../InputQuantity"
import { Button } from "../Button"
import { ContentCol } from "../ContentCol"
import { CartShopping } from "../../SVG/cartShopping"
import { Shopping } from "../../SVG/shopping"
import { Container } from "../Container"

type InformationProductType = "InformationProduct" | "InformationProduct1"
export interface InformationProductProps {
    styleTemplate?: InformationProductType
    img: string
    name: string
    precio: number
    description: ReactNode
    id: string
    tallas: string[]
    color: string[]
    cantidad: number
    buttoncart: ReactNode
    buttonshopping: ReactNode



}

export const InformationProduct = ({ tallas, precio, name, img, id, description, color, cantidad, buttoncart, buttonshopping
    , styleTemplate = "InformationProduct" }: InformationProductProps) => {
    return (<>
        <Container>
            <div className={`InformationProduct ${styleTemplate}`}>

                <div className="contentImage">
                    <img src={img} className="imagenProduct"></img>
                </div>
                <div className="DetalleProduct">
                    <Text styleTemplate="text1">
                        {name}
                    </Text>
                    <Text styleTemplate="text7">
                        {parseNumber(precio)}
                    </Text>
                    <Text styleTemplate="text2" className="description">
                        {description}
                    </Text>
                    <Text styleTemplate="text1">
                        Tallas
                        <InputSelect

                            options={
                                tallas.map((element, index) => {
                                    const talla: Option = {
                                        label: `Talla: ${element}`,
                                        value: element
                                    }
                                    return talla
                                })
                            }

                        />

                    </Text>
                    <Text styleTemplate="text1">
                        Color
                        <InputSelect
                            options={
                                color.map((elemento, index) => {
                                    const color: Option = {
                                        label: `Color: ${elemento}`,
                                        value: elemento
                                    }
                                    return color
                                })
                            }
                        />

                    </Text>

                    <Text>
                        Disponible {cantidad}

                    </Text>
                    <InputQuantity
                        nproduct={4}
                    />
                    <div className="buttonCarritoComprar">
                        <Button className="CartShopping">
                            <CartShopping />
                            {buttoncart}
                        </Button>

                        <Button className="Shopping" >
                            <Shopping />
                            {buttonshopping}
                        </Button>
                    </div>




                </div>

            </div>



        </Container>

    </>)
}
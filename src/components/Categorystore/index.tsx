import { ReactNode } from "react"
import { View } from "../../SVG/view"
import { Text } from "../Text"
import { parseNumber } from "../../functions/parseNumber"
import Link from "next/link"


export type CategoryStoreType = "CategoryStore" | "CategoryStore1" | "CategoryStore2"

export interface CategoryStoreProps {
    styleTemplate?: CategoryStoreType

    img: string
    name: ReactNode
    description: ReactNode
    precio: number
    id:string

}
export const CategoryStore = ({ id,img, styleTemplate = "CategoryStore", name, description, precio }: CategoryStoreProps) => {
    return (
        <>
            <div className={`CategoryStore ${styleTemplate}`}>
                <div className="vistaCategory">
                    <div className="contentVista">
                        <Link href={`/product/${id}`}>
                         <div className="vista" >
                            <View />
                        </div>   
                        </Link>
                    
                    </div>
                    <div className="contentImg">

                        <img src={img} className="img"></img>
                    </div>


                </div>
                <div className="informationProduc">
                    <Text styleTemplate="text1" className="name">
                        {name}
                    </Text>
                    <Text styleTemplate="text2" className="description">
                        {description}
                    </Text>
                    <Text styleTemplate="text7">
                        {parseNumber(precio)}
                    </Text>
                </div>


            </div>


        </>
    )
}
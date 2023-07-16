import { CircleMinus } from "../../SVG/circleminus"
import { CirclePlus } from "../../SVG/circleplus"
import { ReactNode, useState } from "react"

type InputQuantityType = "InputQuantity" | "InputQuantity1"
export interface InputQuantityProps {
    styleTemplate?: InputQuantityType
  
    nproduct: number

}

export const InputQuantity = ({ nproduct = 4, styleTemplate = "InputQuantity" }: InputQuantityProps) => {
    const [data, setData] = useState<number>(0)
    const singleProductAumentar = () => {
        setData((data) => Math.min(data + 1, nproduct))
    }
    const singleProductDisminuir = () => {
        setData((data) => Math.max(data - 1, 0))

    }
    return (<>
        <div className={`InputQuantity ${styleTemplate}`}>

            <div className="Circle" onClick={singleProductDisminuir}>
                <CircleMinus />
            </div>

            <div className="Data">
                {data}
            </div>


            <div className="Circle" onClick={singleProductAumentar}>
                <CirclePlus />
            </div>
        </div>
    </>)
}
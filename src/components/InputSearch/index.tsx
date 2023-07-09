import { MagnifyingGlass } from "../../SVG/magnifyinGlass"

export type InputSearchType = "input1"

export interface InputSearchProps {
    styleTemplate?: InputSearchType
}

export const InputSearch = ({ styleTemplate= "input1" }: InputSearchProps) => {
    return (<>
        <div className={`InputSearch ${styleTemplate}`}>
            <MagnifyingGlass/>
            <input className="input"
                type="text"
                placeholder="Busca lo que deseas"
            />
        </div>


    </>)
}
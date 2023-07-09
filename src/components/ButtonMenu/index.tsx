import { useState } from "react"
import { Menu } from "../../SVG/menu"
import { X } from "../../SVG/x"


export type ButtonMenuType = "ButtonMenu"

export interface ButtonMenuProps {
    styleTemplate?: ButtonMenuType
}

export const ButtonMenu = ({ styleTemplate = "ButtonMenu" }: ButtonMenuProps) => {
    const [active, setactive] = useState(false)
    const toggleActive = () => {
        setactive((pre) => !pre)
    }


    return (<>
        <div className={`ButtonMenu ${styleTemplate} ${active ? "active" : "inactive"}`} onClick={toggleActive}>
            <Menu className="menubar" />
            <X className="close"/>
        </div>
    </>)
}
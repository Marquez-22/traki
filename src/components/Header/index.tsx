import { User } from "../../SVG/user"
import { ButtonMenu } from "../ButtonMenu"
import { InputSearch } from "../InputSearch"
import { Logo } from "../Logo"
import { Instagram } from "../../SVG/instagram"
import { MenuLeft } from "../Menuletf"
import { Container } from "../Container"

export type HeaderType = "Header"
export interface HeaderProps {
    styleTemplate?: HeaderType

}

export const Header = ({ styleTemplate = "Header" }: HeaderProps) => {
    return (<>
        <div className={`Header ${styleTemplate}`}>

            <Container>
                <div className="contentHeader">

                    <ButtonMenu />

                    <div className="trakiheader">
                        <Logo />

                    </div>


                    <InputSearch />

                    <div className="redes">
                        <User />
                        <Instagram />
                    </div>
                </div>

            </Container>

        </div>
        <div className={`HeaderContentMenuLef`}>
            <MenuLeft />
        </div>
    </>)
}
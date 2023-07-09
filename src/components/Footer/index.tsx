
import { Facebook } from "../../SVG/facebook"
import { Text } from "../Text"
import { Instagram } from "../../SVG/instagram"
import { Twitter } from "../../SVG/twitter"
import { Cart } from "../../SVG/cart"
import { Container } from "../Container"
import Link from "next/link"
type FooterType = "Footer" | "Footer1" | "Footer2"
export interface FooterProps {
    styleTemplate?: FooterType

}

export const Footer = ({ styleTemplate = "Footer" }: FooterProps) => {
    return (<>
        <div className={`Footer ${styleTemplate}`}>
            <Container>
                <div className="contentFooter">
                    <div className="clmn1">
                        <img src="/img/trakilogo.png" className="trakilogo1"></img>
                        <div className="history">
                            <Text styleTemplate="text2">
                                Somos una división de tiendas por departamentos con más de 35 años de trayectoria en el mercado Venezolano. Actualmente contamos con 46 sucursales ubicadas en todo el país.
                            </Text>

                        </div>

                    </div>


                    <div className="clmn2">
                        <div className="location">
                            <Text styleTemplate="text3">
                                Ubicacion
                            </Text>
                            <div className="contentLocation" >
                                <Link href="Ubicacion">
                                    <Text styleTemplate="text4">
                                        Nosotros
                                    </Text>

                                </Link>
                                <Link href="Fundacion">
                                    <Text styleTemplate="text4">
                                        Fundacion Traki
                                    </Text>

                                </Link>
                                <Link href="Ubicacion">
                                    <Text styleTemplate="text4">
                                        Ubicanos
                                    </Text>

                                </Link>

                            </div>


                        </div>


                    </div>

                    <div className="clmn3">

                        <Text styleTemplate="text3">
                            Contactanos
                        </Text>
                        <div className="Contactanos">
                            < Cart />
                            <Text styleTemplate="text4">
                                Autotraki
                            </Text>

                        </div>
                    </div>
                    <div className="clmn4">
                        <Text styleTemplate="text3">
                            Siguenos en redes
                        </Text>
                        <div className="redes">
                            <Instagram />
                            <Twitter />
                            <Facebook />
                        </div>
                    </div>

                </div>
            </Container>

        </div>




    </>)
}
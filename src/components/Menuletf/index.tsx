
import { Woman } from "../../SVG/woman"
import { Text } from "../Text"

import Link from "next/link"
import { Niños } from "../../SVG/niños"
import { Man } from "../../SVG/man"
import { Home } from "../../SVG/home"
import { Forniture } from "../../SVG/forniture"
import { Kitchen } from "../../SVG/kitchen"
import { Bathroom } from "../../SVG/Bathroom"
import { Ilumination } from "../../SVG/ilumination"
import { Textil } from "../../SVG/textil"
import { Organizador } from "../../SVG/organizador"
import { Electrodomesticos } from "../../SVG/electrodomesticos"
import { AireLibre } from "../../SVG/airelibre"
import { Cleaning } from "../../SVG/cleaning"
import { Decoration } from "../../SVG/decoration"

export type MenuLeftType = "MenuLeft" | "MenuLeft1"
export interface MenuLeftProps {

    styleTemplate?: MenuLeftType
}
export const MenuLeft = ({ styleTemplate = "MenuLeft" }: MenuLeftProps) => {
    return (
        <>
            <div className={`MenuLeft ${styleTemplate}`}>
                <Link href={"/damas"}>
                    <Text styleTemplate="text4">
                        <Woman />
                        Damas
                    </Text>
                </Link>
                <Link href={"/Niños"}>
                    <Text styleTemplate="text4">
                        <Niños />
                        Niños
                    </Text>
                </Link>
                <Link href={"/Caballeros"}>
                    <Text styleTemplate="text4">
                        <Man />
                        Caballeros
                    </Text>
                </Link>
                <Link href={"/Hogar"}>
                    <Text styleTemplate="text4">
                        <Home />
                        Hogar
                    </Text>
                </Link>
                <Link href={"/Mobiliario"}>
                    <Text styleTemplate="text4">
                        <Forniture />
                        Mobiliario
                    </Text>
                </Link>
                <Link href={"/Cocina"}>
                    <Text styleTemplate="text4">
                        <Kitchen />
                        Cocina
                    </Text>
                </Link>
                <Link href={"/Baño"}>
                    <Text styleTemplate="text4">
                        <Bathroom />
                        Baño
                    </Text>
                </Link>
                <Link href={"/Iluminación"}>
                    <Text styleTemplate="text4">
                        <Ilumination />
                        Iluminación
                    </Text>
                </Link>
                <Link href={"/Textiles"}>
                    <Text styleTemplate="text4">
                        <Textil />
                        Textiles
                    </Text>
                </Link>
                <Link href={"/Organización"}>
                    <Text styleTemplate="text4">
                        <Organizador />
                        Organización
                    </Text>
                </Link>
                <Link href={"/Electrodomésticos"}>
                    <Text styleTemplate="text4">
                        <Electrodomesticos />
                        Electrodomésticos
                    </Text>
                </Link>
                <Link href={"/Aire Libre"}>
                    <Text styleTemplate="text4">
                        <AireLibre />
                        Aire Libre
                    </Text>
                </Link>
                <Link href={"/Limpieza"}>
                    <Text styleTemplate="text4">
                        <Cleaning />
                        Limpieza
                    </Text>
                </Link>
                <Link href={"/Decoración"}>
                    <Text styleTemplate="text4">
                        <Decoration />
                        Decoración
                    </Text>
                </Link>
            </div>
        </>
    )
}
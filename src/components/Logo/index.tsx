import Link from "next/link"
import { ReactNode } from "react"

export type LogoType = "Logo1" | "Logo2"

export interface LogoProps {

    styleTemplate?: LogoType
}

export const Logo = ({ styleTemplate = "Logo1" }: LogoProps) => {
    return (
        <Link href="/">
            <div className={`Logo ${styleTemplate}`}>

                <img src="/img/trakilogo.png" className="trakilogo"></img>
            </div>
        </Link>


    )
}
import { ReactNode } from "react"
import { Header } from "../Header"
import { Footer } from "../Footer"

type LayoutType = "Layout1"
export interface LayoutProps {
    styleTemplate?: LayoutType
    children: ReactNode
}

export const Layout = ({ children, styleTemplate = "Layout1" }: LayoutProps) => {
    return (<>
        <div className={`Layout ${styleTemplate}`}>
            <Header />
            <div className="LayoutContent">
            {children}
            </div>
            <Footer />
        </div>
    </>)
}
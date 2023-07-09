import { ReactNode } from "react"
import { Button } from "../Button"
import { Text } from "../Text"

export type ContentInformationType = "ContentInformation" | "ContentInformation1" | "ContentInformation2"

export interface ContentInformationProps {
    text?: ReactNode
    button?: ReactNode

    styleTemplate?: ContentInformationType
}
export const ContentInformation = ({ text, button, styleTemplate = "ContentInformation" }: ContentInformationProps) => {
    return (
        <>
            <div className={`ContentInformation ${styleTemplate}`}>
                <Text styleTemplate="text1">
                    {text}
                </Text>
                <Button>
                    {button}
                </Button>


            </div>
        </>
    )
}
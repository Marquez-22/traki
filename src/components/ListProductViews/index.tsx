import { ReactNode } from "react"
import { CategoryStore, CategoryStoreProps, CategoryStoreType } from "../Categorystore"
import { ContentCol } from "../ContentCol"

type ListProductViewsType = "ListProductViews" | "ListProductViews1"
export interface ListProductViewsProps {
    styleTemplate?: ListProductViewsType
    productViews: CategoryStoreProps[]

}

export const ListProductViews = ({ productViews, styleTemplate = "ListProductViews" }: ListProductViewsProps) => {
    return (<>
        <div className={`ListProductViews ${styleTemplate}`}>
            <ContentCol styleTemplate="ContentCol2"> {

                productViews.map((element, index) => {
                    return (<>
                        <CategoryStore
                            key={index}
                            img={element.img}
                            id={element.id}
                            
                            name={element.name}
                            description={element.description}
                            precio={element.precio}


                        />




                    </>)

                })

            }


            </ContentCol>

        </div>
    </>)
}
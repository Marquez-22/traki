import React from "react";
import { Story, Meta } from "@storybook/react";

import { InformationProduct, InformationProductProps } from "./index";

export default {
    title: "Component/InformationProduct",
    component: InformationProduct,
} as Meta;

const Profile: Story<InformationProductProps> = (args) => (
    <InformationProduct {...args}/>
);

export const Index = Profile.bind({});
Index.args = {
        img:"/img/trakiwoman/traki1.jpg",
        name:"Talego Dulce",
        precio:100000,
        description:"Talego corto unicolor, en popelina, manga tira con gola, encauchado atrás",
        id:"DU02CV",
        tallas:["XS","S","M","L","XL"],
        color:["Negro", "Azul", "Blanco","Rojo"],
        cantidad:10,
        buttoncart:"Añadir al carrito",
        buttonshopping:"Comprar Ahora",
        
styleTemplate:"InformationProduct"
}






        

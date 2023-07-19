import React from "react";
import { Story, Meta } from "@storybook/react";

import { CategoriProduct, CategoriProductProps } from "./index";
import { ImagesProduct } from "../ImagesProduct";

export default {
    title: "Component/CategoriProduct",
    component: CategoriProduct,
} as Meta;

const Profile: Story<CategoriProductProps> = (args) => (
    <CategoriProduct {...args} />
);

export const Index = Profile.bind({});
Index.args = {

    styleTemplate: "CategoriProduct1",
    nameCategory:"Nombre",
    svgCategory:(<>
        svg
    </>),
    listCategorias:[
        {
            button:"aaaaaaaaaa",
            img:"/img/trakiwoman/traki1.jpg",
            text:"assad"
        },
        {
            button:"asdasd",
            img:"/img/trakiwoman/traki1.jpg",
            text:"assad"
        },
        {
            button:"asdasd",
            img:"/img/trakiwoman/traki1.jpg",
            text:"assad"
        },
    ]
};
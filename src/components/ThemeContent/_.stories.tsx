import React from "react";
import { Story, Meta } from "@storybook/react";

import { ThemeContent, ThemeContentProps } from "./index";

export default {
    title: "Component/ThemeContent",
    component: ThemeContent,
} as Meta;

const Profile: Story<ThemeContentProps> = (args) => (
    <ThemeContent {...args} />
);

export const Index = Profile.bind({});
Index.args = {
    circleProduct: [
        {
            circleimg: "/img/trakiwoman/trakiwoman6.jpg",
            texto: "Damas",
        },
        {
            circleimg: "/img/trakihome/trakihome5.jpg",
            texto: "Hogar",
        },
        {
            circleimg: "/img/trakiman/TrakiMan8.jpg",
            texto: "Caballero",
        },
        {
            circleimg: "/img/trakiluminacion/trakiluminacion.jpg",
            texto: "Iluminacion",
        },
        {
            circleimg: "/img/trakielectrodomesticos/trakielectrodomesticos.jfif",
            texto: "Electrodomesticos",
        },


    ],
    styleTemplate: "ThemeContent"
};
import React from "react";
import { Story, Meta } from "@storybook/react";

import { ListProductViews, ListProductViewsProps } from "./index";

export default {
    title: "Component/ListProductViews",
    component: ListProductViews,
} as Meta;

const Profile: Story<ListProductViewsProps> = (args) => (
    <ListProductViews {...args} />
);

export const Index = Profile.bind({});
Index.args = {
    productViews: [
        {
            img: "/img/trakiwoman4.jpg",
            name: "Vestido Valentina",
            description: "Vestido casual basico unicolor",
            precio: 100000,

        },

        {
            img: "/img/trakiwoman4.jpg",
            name: "Vestido Valentina",
            description: "Vestido casual basico unicolor",
            precio: 100000,
        },

        {
            img: "/img/trakiwoman4.jpg",
            name:"Vestido Valentina",
            description:"Vestido casual basico unicolor",
            precio:100000,
        },

        {
            img: "/img/trakiwoman4.jpg",
            name:"Vestido Valentina",
            description:"Vestido casual basico unicolor",
            precio:100000,
        }

    ],

};
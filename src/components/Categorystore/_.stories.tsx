import React from "react";
import { Story, Meta } from "@storybook/react";

import { CategoryStore, CategoryStoreProps } from "./index";

export default {
    title: "Component/CategoryStore",
    component: CategoryStore,
} as Meta;

const Profile: Story<CategoryStoreProps> = (args) => (
    <CategoryStore {...args}/>
);

export const Index = Profile.bind({});
Index.args = {
        img: "/img/trakiwoman/trakiwoman4.jpg",
        name:"Vestido Valentina",
        description:"Basico vestido casual unicolor",
        precio:65000,

        styleTemplate:"CategoryStore"
};
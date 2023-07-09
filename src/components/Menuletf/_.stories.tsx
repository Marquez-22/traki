import React from "react";
import { Story, Meta } from "@storybook/react";

import { MenuLeft, MenuLeftProps } from "./index";

export default {
    title: "Component/MenuLeft",
    component: MenuLeft,
} as Meta;

const Profile: Story<MenuLeftProps> = (args) => (
    <MenuLeft {...args}/>
);

export const Index = Profile.bind({});
Index.args = {
      
        styleTemplate:"MenuLeft1"
};